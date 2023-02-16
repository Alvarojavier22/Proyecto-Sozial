"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import (
    db,
    User,
    Products,
    Categories,
    Post,
    Likes,
    Comments,
    ShoppingCart,
    Favorites,
    Buy,
    TokenBlocklist,
    Imagen,
)
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    get_jwt,
)
from datetime import datetime, timezone  # para el cierre de sesión
from flask_bcrypt import Bcrypt
from sqlalchemy import or_
import tempfile
from firebase_admin import credentials, storage

api = Blueprint("api", __name__)

cripto = Bcrypt(Flask(__name__))


# DELETE USERS (ADMIN) SE HACE CON EL METODO PUT PORQUE CUANDO SE TRATA DE ELIMINAR CON DELETE DA ERROR POR EL HECHO DE  ❌
# QUE EXISTEN PUBLICACIONES QUE DEPENDEN DE EL
@api.route("users/<int:user_id>/", methods=["PUT"])
def delete_user(user_id):
    user = User.query.filter(User.id == user_id).first()

    if user.is_active == True:
        update_users = user
        update_users.is_active = False

        db.session.add(update_users)
        db.session.commit()

        return jsonify({"msg": "user delete"}), 201

    return jsonify({"msg": "No exists user to delete"})


# ADMIN LOGIN # VALIDAR SI SE PUEDE HACER ASÍ PARA QUE EL LOGIN SE GENERE CON EL ROL ADMIN ❌
@api.route("/admin/login/", methods=["POST"])
def admin_login():
    # email = request.json.get("email")
    username = request.json.get("username")
    password = request.json.get("password")
    user = User.query.filter(User.email == email).first()
    username = User.query.filter(User.username == username).first()
    # No encuentro Usuario

    print(username)

    if username == None:
        return jsonify({"msg": "invalid login"}), 401

    # PASSWORDS VALIDATION
    if cripto.check_password_hash(user.password, password):
        # if user.password==password:
        # adittional_claims lo que hacer es agregar información adicional al access tokken, se puede mirar en jwt.io
        # validar la posibilidad de que pueda crearse un perfil de admin
        access_token = create_access_token(
            identity=user.id, additional_claims={"role": "admin"}
        )
        refresh_token = create_refresh_token(identity=user.id)

        return (
            jsonify({"token": access_token, "refresh": refresh_token, "role": "admin"}),
            200,
        )


# LOGIN USER ✔️
@api.route("/login/", methods=["POST"])
def user_login():
    email = request.json.get("email")
    password = request.json.get("password")
    # user = User.query.filter(User.email == email).first()
    user = User.query.filter(or_(User.username == email, User.email == email)).first()
    # No encuentro Usuario

    print(user)

    if user == None:
        return jsonify({"msg": "invalid login"}), 401

    # PASSWORDS VALIDATION
    if cripto.check_password_hash(user.password, password):
        # if user.password==password:
        # adittional_claims lo que hacer es agregar información adicional al access tokken, se puede mirar en jwt.io
        # validar la posibilidad de que pueda crearse un perfil de admin
        access_token = create_access_token(
            identity=user.id, additional_claims={"role": "user"}
        )
        refresh_token = create_refresh_token(identity=user.id)
        return (
            jsonify(
                {
                    "token": access_token,
                    "refresh": refresh_token,
                    "role": "user",
                    "success": "User login successfully",
                }
            ),
            200,
        )

    else:
        # INVALID PASSWORD
        return jsonify({"msg": "invalid password"}), 401


# CHANGE PASSWORD ✔️
@api.route("/user/change_password/", methods=["PUT"])
@jwt_required()
def change_password():
    user_id = get_jwt_identity()
    email = request.json.get("email")
    password = request.json.get("password")
    password = cripto.generate_password_hash(password).decode("utf-8")
    user = User.query.filter(User.email == email).filter(User.id == user_id).first()

    if not user is None:
        user.password = password

        db.session.add(user)
        db.session.commit()

        return jsonify({"success": "password has been change correctly"}), 201

    return jsonify({"msg": "this is not your user"}), 404


# USERDATA VALIDATION ✔️
@api.route("/userdata/", methods=["GET"])
@jwt_required()  # automaticamente protege la ruta la cual se le indique
def user_data_protected():
    user_id = get_jwt_identity()
    # me trae la info del token junto al id vinculado (identity = user.id), por lo que se puede saber que usuario está haciendo la petición y restringir a que recursos ese usuario va a tener acceso
    # con este id solo se accede a la información de ese usuario y de más nadie
    user = User.query.get(user_id)

    return jsonify(
        {
            "user_id": user.id,
            "is_active": user.is_active,
            "user_email": user.email,
            "user_name": user.name + str(" ") + user.surname,
            # "profile_pic": user.profile_picture.image_url(), # genera error
            # aqui se trae la información del rol de cliente
            "role": get_jwt()["role"],
            "msg": "valid token",
        }
    )


# LOGOUT SESSION ✔️
@api.route("/logout/", methods=["POST"])
@jwt_required()
def user_logout():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    blocked_token = TokenBlocklist(jti=jti, created_at=now)
    db.session.add(blocked_token)
    db.session.commit()
    return jsonify(msg="JWT revoked")


# ALL USERS # ACOMODAR PARA QUE SOLO SEA EL ADMIN EL QUE PUEDA MIRAR TODOS LOS USUARIOS ✔️
@api.route("/users/", methods=["GET"])
def users():
    users = User.query.filter(User.__tablename__ == "user").all()
    all_users = []

    if not users is None:
        for i in range(len(users)):
            if (
                users[i].is_active == False
            ):  # para que salte el usuario si no esta activo
                continue

            all_users.append(users[i].serialize())

        if len(all_users) > 0:
            return jsonify({"users": all_users}), 201

    return jsonify({"msg": "No have any user"}), 404


# USER INTERACTION WITH LIKES ✔️
@api.route("/likes/<int:post_id>/", methods=["POST"])
@jwt_required()
def generate_likes(post_id):
    user_id = get_jwt_identity()
    post = Post.query.filter(Post.id == post_id).first()
    likes_verificator = (
        Likes.query.filter(Likes.like_user_id == user_id)
        .filter(Likes.post_id == post_id)
        .first()
    )
    # un like_user_id es el de la ruta el otro es el de la tabla de likes para igualarlos
    generate_like = Likes(post_id=post_id, like_user_id=user_id)

    if not post is None:
        if likes_verificator is None:
            db.session.add(generate_like)
            db.session.commit()

            return jsonify({"success": "like has been generated successfully"}), 201

        return jsonify({"msg": "this user has already generated as in this post"})

    return jsonify({"msg": "post doesn't exists"}), 404


# REMOVE LIKES IN POST ✔️
@api.route("/likes/<post_id>/", methods=["DELETE"])
@jwt_required()
def remove_likes(post_id):
    user_id = get_jwt_identity()
    post = Post.query.filter(Post.id == post_id).first()
    likes_verificator = (
        Likes.query.filter(Likes.post_id == post_id)
        .filter(Likes.like_user_id == user_id)
        .first()
    )

    if not post is None:
        if not likes_verificator is None:
            db.session.delete(likes_verificator)
            db.session.commit()

            return jsonify({"success": "like has been remove successfully"}), 201

        return jsonify({"msg": "this like doesn't exists"}), 404

    return jsonify({"msg": "this post doesn't exists"}), 404


# GET ALL LIKES ### ACOMODAR PARA ADMIN SOLAMENTE ❌
@api.route("/likes/", methods=["GET"])
def likes():
    likes = Likes.query.filter(Likes.__tablename__ == "likes").all()

    all_likes = []

    for i in range(len(likes)):
        all_likes.append(likes[i].serialize())

    if len(all_likes) > 0:
        return jsonify({"likes": all_likes})

    return jsonify({"msg": "No have any like"}), 404


# LIKES BY POSTS ## NO NECESITA DE JWT PARA QUE TODOS LOS USUARIOS OGEADOS Y NO, PUEDAN MIRAR LAS PUBLICACIONES CON SUS LIKE ✔️
@api.route("/likes/<int:post_id>/", methods=["GET"])
def likes_by_posts(post_id):
    likes = Likes.query.filter(Likes.post_id == post_id).all()
    likes_by_posts = []

    if not likes is None:
        for i in range(len(likes)):
            likes_by_posts.append(likes[i].serialize())

        if len(likes_by_posts) > 0:
            return jsonify({"likes by post": likes_by_posts}), 201

        return jsonify({"msg": "this post doesn't have any like"}), 404

    return jsonify({"msg": "this post not have any like"}), 404


# ESTA RUTA NO SE ACORTA COMO ARNALDO DIJO (SIN EL COMMENT_USER_ID PORQUE CON ESE ID EN LA TABLA SE IMPRIMEN LOS DATOS DE QUIEN COMENTA)
# USER INTERACTION WITH COMMENTS ✔️
@api.route("/comments/<int:post_id>/", methods=["POST"])
@jwt_required()
def post_comments(post_id):
    user_id = get_jwt_identity()
    comment = request.json.get("comment")
    generate_comment = Comments(
        comment=comment, post_id=post_id, comment_user_id=user_id
    )
    post = Post.query.filter(Post.id == post_id).first()

    if not post is None:
        db.session.add(generate_comment)
        db.session.commit()

        return jsonify({"success": "comment has been generated successfully"}), 201

    return jsonify({"msg": "post doesn't exists"}), 404


# ALL COMMENTS ## ARREGLAR PARA ADMIN ❌
@api.route("/comments/", methods=["GET"])
def get_comments():
    comments = Comments.query.filter(Comments.__tablename__ == "comments").all()

    all_commets = []

    for i in range(len(comments)):
        all_commets.append(comments[i].serialize())

    if len(all_commets) > 0:
        return jsonify({"all comments": all_commets}), 201

    return jsonify({"msg": "No have any comment"}), 404


# COMMENT BY POST ## TODOS LOS USUARIOS ✔️
@api.route("/comments/<post_id>/", methods=["GET"])
def commet_by_post(post_id):
    comments = Comments.query.filter(Comments.post_id == post_id).all()
    comments_by_id = []

    if len(comments) > 0:
        for i in range(len(comments)):
            comments_by_id.append(comments[i].serialize())

        return jsonify({"comments by post": comments_by_id}), 201

    return jsonify({"msg": "this post not have any comment"}), 404


# DELETE COMMENTS ✔️
# SE CONDICIONA A QUE COMO PARAMETRO EL POST ID Y EL COMMENT ID PARA QUE EL USUARIO PUEDA ELIMINAR UN SOLO COMENTARIO SI TIENE VARIOS
@api.route("/comments/<int:post_id>/<int:comment_id>/", methods=["DELETE"])
@jwt_required()
def delete_comments(post_id, comment_id):
    user_id = get_jwt_identity()
    post = Post.query.filter(Post.id == post_id).first()
    delete_comments = (
        Comments.query.filter(Comments.post_id == post_id)
        .filter(Comments.id == comment_id)
        .first()
    )

    if not post is None:
        if not delete_comments is None:
            db.session.delete(delete_comments)
            db.session.commit()

            return jsonify({"success": "comment has been remove successfully"}), 201

        return jsonify({"msg": "this comment doesn't exists in this user"}), 404

    return jsonify({"msg": "this post doesn't exists"}), 404


# GENERATE POSTS ✔️
@api.route("/posts/", methods=["POST"])
@jwt_required()
def post():
    user_id = get_jwt_identity()
    text = request.json.get("text")
    picture = request.json.get("picture")

    post = Post(user_id=user_id, text=text, picture=picture)

    db.session.add(post)
    db.session.commit()

    return jsonify({"success": "publicaction generate successfully"}), 200


# ALL FAVORITES LIST ## SOLO PARA VERIFICAR AUNQUE PUEDE SER FUNCIÓN ADMIN
@api.route("/favorites/", methods=["GET"])
def favorites():
    favorites = Favorites.query.filter(Favorites.__tablename__ == "favorites").all()

    all_favorites_list = []

    if len(favorites) > 0:
        for i in range(len(favorites)):
            all_favorites_list.append(favorites[i].serialize())

        return jsonify({"favorites list": all_favorites_list}), 201

    return jsonify({"msg": "doesn't exists any product like favorite"}), 404


# FAVORITES BY USER ✔️
@api.route("/favorites/<int:user_id>/", methods=["GET"])
@jwt_required()
def user_favorites(user_id):
    jwt_user_id = get_jwt_identity()
    user = User.query.filter(User.id == user_id).first()
    favorites = Favorites.query.filter(Favorites.user_id == user_id).all()

    user_favorites = []

    if not user is None and user_id == jwt_user_id:
        if len(favorites) > 0:
            for i in range(len(favorites)):
                user_favorites.append(favorites[i].serialize())

            return jsonify({"user favorites": user_favorites}), 201

        return jsonify({"msg": "this user doesn't have any favorite"}), 404

    return jsonify({"msg": "log in to see your favorites list"}), 404


# ADD PRODUCT TO FAVORITE LIST ✔️
@api.route("/favorites/add/<int:product_id>/", methods=["POST"])
@jwt_required()
def add_favorites(product_id):
    user_id = get_jwt_identity()
    product = Products.query.filter(Products.id == product_id).first()
    # PARA VALIDAR QUE EL PRODUCTO NO SE ENCUENTRA YA COMO FAVORITO
    favorite_id = Favorites.query.filter(Favorites.product_id == product_id).first()
    add_favorites = Favorites(user_id=user_id, product_id=product_id)

    if not product is None and product.avaliable == True:
        if favorite_id is None:
            db.session.add(add_favorites)
            db.session.commit()

            return jsonify({"success": "product has been added to favorites"}), 201

        return jsonify({"msg": "product already exists in favorites"}), 404

    return jsonify({"msg": "product doesn't exists"}), 404


# ALL SHOPPING CART LIST ### PARA VERIFICACIÓN O PARA ADMINS ✔️
@api.route("/shopping_cart/", methods=["GET"])
def shopping_cart():
    shoppingcart = ShoppingCart.query.filter(
        ShoppingCart.__tablename__ == "shoppingcart"
    ).all()

    all_shoppingcart_list = []

    if len(shoppingcart) > 0:
        for i in range(len(shoppingcart)):
            all_shoppingcart_list.append(shoppingcart[i].serialize())

        return jsonify({"shopping cart list": all_shoppingcart_list}), 201

    return jsonify({"msg": "shopping cart not have products"}), 404


# SHOPPING CART LIST BY USER ✔️
@api.route("/shopping_cart/<int:user_id>/", methods=["GET"])
@jwt_required()
def user_shoppingcart(user_id):
    jwt_user_id = get_jwt_identity()
    shoppingcart_products = ShoppingCart.query.filter(
        ShoppingCart.user_id == user_id
    ).all()
    user_shoppingcart = []

    if jwt_user_id == user_id:
        if len(shoppingcart_products) > 0:
            for i in range(len(shoppingcart_products)):
                user_shoppingcart.append(shoppingcart_products[i].serialize())

            return jsonify({"user shopping cart": user_shoppingcart}), 201

        return (
            jsonify({"msg": "this user don't have any product in shopping cart"}),
            404,
        )

    return jsonify({"msg": "login to see your shopping cart"}), 404


# ADD PRODUCT TO SHOPPING CART ### TERMINAR ESA RUTA Y A RAIZ DE ESTA MEJORAR LAS OTRAS ✔️
@api.route("/cart/add/<int:product_id>/", methods=["POST"])
@jwt_required()
def add_product_to_cart(product_id):
    user_id = get_jwt_identity()
    product = Products.query.filter(Products.id == product_id).first()
    shoppingcart_id = ShoppingCart.query.filter(
        ShoppingCart.product_id == product_id
    ).first()
    add_shoppingCart = ShoppingCart(user_id=user_id, product_id=product_id)

    if not product is None and product.avaliable == True:
        if shoppingcart_id is None:
            db.session.add(add_shoppingCart)
            db.session.commit()

            return (
                jsonify({"success": "product has been added to shopping cart"}),
                201,
            )

        return jsonify({"msg": "product already exists in shopping cart"}), 404

    return jsonify({"msg": "product doesn't exists"}), 404


# GET ALL POSTS (FEED) ✔️
@api.route("/posts/", methods=["GET"])
@jwt_required()
def get_post():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    posts = Post.query.filter(Post.__tablename__ == "post").all()
    all_posts = []

    for i in range(len(posts)):
        all_posts.append(posts[i].serialize())

    if len(all_posts) > 0:
        return jsonify({"all posts": all_posts}), 200

    return jsonify({"msg": "not exists any post to show"}), 404


# GET EACH POST ✔️
@api.route("/posts/<int:post_id>/", methods=["GET"])
@jwt_required()
def each_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.filter(Post.id == post_id).first()

    if post is None:
        return jsonify({"msg": "post doesn't exists"}), 404

    return jsonify({"post": post.serialize()}), 202


# (GET) OWN POST BY EACH USER - FEED DEL PERFIL DEL USUARIO, TAMBIÉN SIRVE PARA LSO FEED DE LOS USUARIOS ✔️
@api.route("/posts/user/<int:user_id>/", methods=["GET"])
def post_user(user_id):
    user = User.query.filter(User.id == user_id).first()
    posts = Post.query.filter(Post.user_id == user_id).all()

    all_user_post = []

    if not user is None:
        if len(posts) > 0:
            for i in range(len(posts)):
                all_user_post.append(posts[i].serialize())

            return jsonify({"user posts": all_user_post}), 201

        return jsonify({"msg": "This user not have posts to show"})

    return jsonify({"msg": "This user doesn't exists"}), 404


# DELETE POST ✔️
# EN ESTA RUTA ADEMÁS DE ELIMINAR EL POST, ELIMINA TODO LO QUE DERIVA DE ÉL COMO COMENTARIOS Y LIKES
@api.route("delete/posts/<int:post_id>/", methods=["DELETE"])
@jwt_required()
def delete_post(post_id):
    user_id = get_jwt_identity()
    post = Post.query.filter(Post.id == post_id).first()
    user_post = Post.query.filter(Post.user_id == user_id).first()
    post_likes = Likes.query.filter(Likes.post_id == post_id).all()
    post_comments = Comments.query.filter(Comments.post_id == post_id).all()

    if post.user_id == user_id:
        if not post is None:
            for i in range(len(post_likes)):
                db.session.delete(post_likes[i])
                db.session.commit()

            for i in range(len(post_comments)):
                db.session.delete(post_comments[i])
                db.session.commit()

            db.session.delete(post)
            db.session.commit()

            return jsonify({"success": "post has been delete successfully"}), 201

        return jsonify({"msg": "post doesn't exists in this user"}), 404

    return jsonify({"msg": "login to you can delete the post"}), 404


# CATEGORIES ## ABIERTAS PARA LOGEADOS Y NO ✔️
@api.route("/products/categories/", methods=["GET"])
def categories():
    categories = Categories.query.filter(Categories.__tablename__ == "categories").all()
    all_categories = []

    for i in range(len(categories)):
        all_categories.append(categories[i].serialize())

    if len(categories) > 0:
        return jsonify({"Categories": all_categories}), 201

    return jsonify({"msg": "No categories avaliables"}), 404


# POST PRODUCTS ####### VALIDAR SI ESTA RELACIÓN ESTÁ BUENA PARA VENDEDOR (MIRAR EL MODEL DE POST) ✔️
@api.route("/products/", methods=["POST"])
@jwt_required()
def post_products():
    name = request.json.get("name")
    description = request.json.get("description")
    price = request.json.get("price")
    quantity = request.json.get("quantity")
    avaliable = request.json.get("avaliable")

    user_id = get_jwt_identity()
    post_products = Products(
        seller_id=user_id,
        name=name,
        description=description,
        price=price,
        quantity=quantity,
        avaliable=avaliable,
    )

    db.session.add(post_products)
    db.session.commit()

    return jsonify({"success": "product post successfully"}), 201


# PRODUCTS BY USER ### PARA TODOS QUE PUEDAN VER ✔️
@api.route("/products/user/<int:user_id>/", methods=["GET"])
def user_products(user_id):
    user = User.query.filter(User.id == user_id).first()
    products = Products.query.filter(Products.user_id == user_id).all()

    all_user_products = []

    if not user is None:
        for i in range(len(products)):
            if products[i].avaliable == True:
                all_user_products.append(products[i].serialize())
            continue

        if len(all_user_products) > 0:
            return jsonify({"user products": all_user_products}), 201

        return jsonify({"msg": "this user doesn't have products posted"}), 404

    return jsonify({"msg": "this user doesn't exists"}), 404


# DEACTIVATE PRODUCTS ✔️
@api.route("/products/deactivate/<int:product_id>/", methods=["PUT"])
@jwt_required()
def deactivate_product(product_id):
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    product = Products.query.filter(Products.id == product_id).first()

    if product.seller_id == user_id:
        if not product is None:
            if product.avaliable == True:
                product.avaliable = False

                db.session.add(product)
                db.session.commit()

                return jsonify({"success": "now the product isn't avaliable"}), 201

            return jsonify({"msg": "this product doesn't is active now"}), 404

        return jsonify({"msg": "this product doesn't exists"}), 404

    return jsonify({"msg": "login to can deactivate products"}), 404


# ACTIVATE PRODUCTS ✔️
@api.route("/products/activate/<int:product_id>/", methods=["PUT"])
@jwt_required()
def activate_product(product_id):
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    product = Products.query.filter(Products.id == product_id).first()

    if product.seller_id == user_id:
        if not product is None:
            if product.avaliable == False:
                product.avaliable = True

                db.session.add(product)
                db.session.commit()

                return jsonify({"success": "now the product is avaliable"}), 201

            return jsonify({"msg": "this product doesn't is inactive now"}), 404

        return jsonify({"msg": "this product doesn't exists"}), 404

    return jsonify({"msg": "login to can activate products"}), 404


# ALL PRODUCTS ## SOLO PARA VERIFICACIÓN ✔️
@api.route("/products/", methods=["GET"])
def products():
    products = Products.query.filter(Products.__tablename__ == "products").all()
    all_products = []

    for i in range(len(products)):
        if products[i].avaliable == False:
            continue

        all_products.append(products[i].serialize())

    if len(all_products) > 0:
        return jsonify({"Products": all_products}), 201

    return jsonify({"msg": "No products avaliables"}), 404


# EACH PRODUCT ## LO PUEDEN VER TODOS LOS USARIOS ✔️
@api.route("/products/<int:product_id>/")
def each_product(product_id):
    product = Products.query.filter(Products.id == product_id).first()

    if not product is None and product.avaliable == True:
        return jsonify({"product": product.serialize()}), 201

    return jsonify({"msg": "product not found"}), 401


# DELETE ALL PRODUCTS (No es un muy necesaria esta ruta que digamos, a menos que sea para el admin o que el usuario quiera eliminar toda us mercancia) ✔️
@api.route("/delete/products/", methods=["DELETE"])
def delete_products():
    products = Products.query.filter(Products.__tablename__ == "products").all()

    if len(products) == 0:
        return jsonify({"msg": "No exists products to delete"}), 404

    for i in range(len(products)):
        db.session.delete(products[i])
        db.session.commit()

    return jsonify({"success": "all products has been delete"}), 201


# DELETE EACH PRODUCT ✔️
@api.route("/delete/products/<int:product_id>/", methods=["DELETE"])
@jwt_required()
def delete_product(product_id):
    user_id = get_jwt_identity()
    product = Products.query.filter(Products.id == product_id).first()
    favorites_products = Favorites.query.filter(
        Favorites.product_id == product_id
    ).all()
    shopping_cart_products = ShoppingCart.query.filter(
        ShoppingCart.product_id == product_id
    ).all()

    if product.seller_id == user_id:
        if not product is None:
            for i in range(len(favorites_products)):
                db.session.delete(favorites_products[i])
                db.session.commit()

            for i in range(len(shopping_cart_products)):
                db.session.delete(shopping_cart_products[i])
                db.session.commit()

            db.session.delete(product)
            db.session.commit()

            return jsonify({"success": "The product has been delete successfully"}), 201

        return jsonify({"msg": "the product doesn't exists"}), 404

    return jsonify({"msg": "log in to delete your products"}), 404


# USER SIGNUP ✔️
@api.route("/signup/", methods=["POST"])
def signup():
    email = request.json.get("email")
    password = request.json.get("password")
    is_active = request.json.get("is_active")
    name = request.json.get("name")
    surname = request.json.get("surname")
    username = request.json.get("username")
    signup = User(
        email=email,
        password=cripto.generate_password_hash(password).decode("utf-8"),
        is_active=is_active,
        name=name,
        surname=surname,
        username=username,
    )
    users = User.query.filter(User.email == email).first()

    if not users is None:
        return jsonify({"msg": "User already exist"}), 404

    db.session.add(signup)
    db.session.commit()

    return jsonify({"msg": "User create succefully"}), 201


# PRODUCTS THAT HAS BEEN PURCHASED # SOLO DE VERIFICACIÓN PARA COMPARAR ✔️
@api.route("/purchased_products/", methods=["GET"])
def purchased_products():
    purchased_products = Buy.query.filter(Buy.__tablename__ == "buy").all()

    all_purchased_products = []

    if len(purchased_products) > 0:
        for i in range(len(purchased_products)):
            all_purchased_products.append(purchased_products[i].serialize())

        return jsonify({"purchased products": all_purchased_products}), 201

    return jsonify({"msg": "doesn't exists any product that has been purchased"}), 404


# PRODUCTS THAT HAS BEEN PURCHASED BY USER ✔️
@api.route("/purchased_products/<int:user_id>/", methods=["GET"])
@jwt_required()
def user_purchased_products(user_id):
    jwt_user_id = get_jwt_identity()
    user_purchased_products = Buy.query.filter(Buy.user_id == user_id).all()

    user_products = []

    if len(user_purchased_products) > 0:
        for i in range(len(user_purchased_products)):
            user_products.append(user_purchased_products[i].serialize())

        return jsonify({"user purshased products": user_products}), 201

    return jsonify({"msg": "this user doesn't has buyed products"})


# BUY PRODUCT ✔️
@api.route("/products/buy/<int:product_id>/", methods=["POST"])
@jwt_required()
def buy_product(user_id, product_id):
    user_id = get_jwt_identity()
    user = User.query.filter(User.id == user_id).first()
    product = (
        Products.query.filter(Products.id == product_id)
        .filter(Products.avaliable == True)
        .first()
    )
    buy = Buy(user_id=user_id, product_id=product_id)

    if not product is None:
        db.session.add(buy)
        db.session.commit()

        return jsonify({"success": "this product has been buy"}), 201

    return jsonify({"msg": "this product doesn't exists"}), 404


@api.route("/uploadPhoto", methods=["POST"])
@jwt_required()
def uploadPhoto():
    # Buscamos el usuario en la Db partiendo desde el token
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if user is None:
        return "User not found", 403

    # peticion ala rchivo
    file = request.files["profilePic"]
    # Extension del archivo
    extension = file.filename.split(".")[1]

    # Guardar el archivo temporalmente
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    # Subir archivo a firebase
    # Llamar a bucket
    bucket = storage.bucket(name="project-f71b8.appspot.com")
    # Se genera el nombre del archivo con el id de la imagen y la extension
    filename = "profiles/" + str(user_id) + "." + extension
    # Referencia al espacio en bucket
    resource = bucket.blob(filename)
    # Se sube el archivo temporal al bucket
    # Se debe especificar el tipo de contenido dependiendo de la extension
    resource.upload_from_filename(temp.name, content_type="image/" + extension)

    # Guardar imagen en DB si ya no existe
    if Imagen.query.filter(Imagen.resource_path == filename).first() is None:
        new_image = Imagen(
            resource_path=filename, description="Profile photo of user" + str(user_id)
        )
        db.session.add(new_image)
        # Procesar las operaciones en la DB y la mantiene abierta para permitir mas operaciones.
        db.session.flush()

        # Atualizar el campo de la foto
        user.profile_picture_id = new_image.id
        # Se crea el registro en la DB
        db.session.add(user)
        db.session.commit()

        return "OK", 200


@api.route("/getphoto", methods=["GET"])
@jwt_required()
def getPhoto():
    # Buscamos el usuario en la BD partiendo del token
    user = User.query.get(get_jwt_identity())
    if user is None:
        return "User not found", 403

    url = user.profile_picture.image_url()

    return jsonify({"pictureUrl": url}), 200
