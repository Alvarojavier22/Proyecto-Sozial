"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Products, Categories, Post, Likes, Comments, ShoppingCart, Favorites, TokenBlocklist
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from datetime import datetime, timezone # para el cierre de sesión
from flask_bcrypt import Bcrypt


api = Blueprint('api', __name__)

cripto = Bcrypt(Flask(__name__))



# DELETE USERS (ADMIN) SE HACE CON EL METODO PUT PORQUE CUANDO SE TRATA DE ELIMINAR CON DELETE DA ERROR POR EL HECHO DE QUE EXISTEN PUBLICACIONES QUE DEPENDEN DE EL
@api.route('users/<int:user_id>/', methods=['PUT'])
def delete_user(user_id):
    user = User.query.filter(User.id == user_id).first()

    if user.is_active == True:
    
        update_users = user
        update_users.is_active = False

        db.session.add(update_users)
        db.session.commit()

        return jsonify ({
            "msg":"user delete"
        }), 201

    return jsonify({
        "msg":"No exists user to delete"
    })




# DELETE POST
@api.route('delete/posts/<int:post_id>/', methods=['DELETE'])
def delete_post(post_id):
    post = Post.query.filter(Post.id == post_id).first()

    if not post is None:
        
        
        db.session.delete(post)
        db.session.commit()
        
        return jsonify({
            "success":"post has been delete successfully"
        }), 201



    return jsonify({
        "msg":"product doesn't exists"
    }), 404


# LOGIN
@api.route('/login/',  methods=['POST'])
def user_login():
    email=request.json.get('email')
    password=request.json.get('password')
    user=User.query.filter(User.email==email).first()
    # No encuentro Usuario

    if user == None:
        print(("Correo invalido"))
        return jsonify({"msg":"Inicio de sesion invalido"}), 401

# PASSWORDS VALIDATION
    if cripto.check_password_hash(user.password, password):
    # if user.password==password:
        print("Clave ok")
        access_token=create_access_token(identity=user.id)
        refresh_token=create_refresh_token(identity=user.id)
        return jsonify({"token":access_token, "refresh":refresh_token}), 200

    else:
    #INVALID PASSWORD
        print(("Clave invalida"))
        return jsonify({"msg":"Inicio de sesion invalido"}), 401


# CHANGE PASSWORD
@api.route('/user/change_password/', methods=['PUT'])
def change_password():
    email = request.json.get("email")
    password = request.json.get("password")
    user = User.query.filter(User.email == email).first()

    if not user is None:
        user.password = password

        db.session.add(user)
        db.session.commit()

        return jsonify({
            "success":"password has been change correctly"
        }), 201

    return jsonify({
        "msg":"this user doesn't exists"
    }), 404


# USER INTERACTION WITH LIKES ##### VERIFICAR UNA MENERA MÁS CORTA DE GENERAR ESTA COMPARATIVA
@api.route('/likes/<int:post_id>/', methods=['POST'])
def generate_likes(post_id):
    like_user_id = request.json.get("like_user_id")
    like_user = Likes.query.filter(Likes.like_user_id == like_user_id).first()
    user = User.query.filter(User.id == like_user_id).first()
    post = Post.query.filter(Post.id  == post_id).first()
    generate_like = Likes(post_id = post_id, like_user_id = like_user_id)

    if not user is None:

        if not post is None:

            if like_user is None:

                db.session.add(generate_like)
                db.session.commit()

                return jsonify({
                    "success":"like has been generated successfully"
                }), 201

            return jsonify({
                "msg":"this user's like already exists in this post"
            }), 404

        return jsonify({
            "msg":"post doesn't exists"
        }), 404

    return jsonify({
        "msg":"this user doesn't exists to generate likes"
    }), 404


# REMOVE LIKES IN POST
@api.route('/likes/<int:user_like_id>/<post_id>/', methods=['DELETE'])
def remove_likes(user_like_id, post_id):
    user = User.query.filter(User.id == user_like_id).first()
    like = Likes.query.filter(Likes.like_user_id == user_like_id).first()

    if not user is None:

        if not like is None:

            db.session.delete(like) 
            db.session.commit()

            return jsonify({
                "success":"like has been remove successfully"
            }), 201

        return jsonify({
            "msg":"this like doesn't exists"
        }), 404

    return jsonify({
        "msg":"this user doesn't exists"
    }), 404



# ALL LIKES
@api.route('/likes/', methods=['GET'])
def likes():
    likes = Likes.query.filter(Likes.__tablename__ == "likes").all()

    all_likes = []
    

    for i in range(len(likes)):
        all_likes.append(likes[i].serialize())

    if len(all_likes) > 0:
        return jsonify({
            "likes":all_likes
        })

    return jsonify({
        "msg":"No have any like"
    }), 404

# LIKES BY POSTS
@api.route('/likes/<int:post_id>/')
def likes_by_posts(post_id):
    likes = Likes.query.filter(Likes.post_id == post_id).all()
    likes_by_posts = []

    if not likes is None: 
        for i in range(len(likes)):
            likes_by_posts.append(likes[i].serialize())

        return jsonify({
            "likes by post":likes_by_posts
        }), 201

    return jsonify({
        "msg":"this post not have any like"
    }), 404


# USER INTERACTION WITH COMMENTS
@api.route('/comments/<int:comment_user_id>/<int:post_id>/', methods=['POST'])
def post_comments(comment_user_id, post_id):
    comment = request.json.get("comment")
    # comment_user_id = request.json.get("comment_user_id")
    generate_comment = Comments(comment = comment, post_id = post_id, comment_user_id = comment_user_id)
    user = User.query.filter(User.id == comment_user_id).first()
    post = Post.query.filter(Post.id == post_id).first()

    if not user is None:

        if not post is None:
            db.session.add(generate_comment)
            db.session.commit()

            return jsonify({
                "success":"comment has been generated successfully"
            }), 201

        return jsonify({
            "msg":"post doesn't exists"
        }), 404
    
    return jsonify({
        "msg":"this user doesn't exists to generate comments"
    }), 404

# ALL COMMENTS
@api.route('/comments/', methods=['GET'])
def get_comments():
    comments = Comments.query.filter(Comments.__tablename__ == "comments").all()

    all_commets = []

    for i in range(len(comments)):
        all_commets.append(comments[i].serialize())

    if len(all_commets) > 0:
        return jsonify({
            "all comments":all_commets
        }), 201

    return jsonify({
        "msg":"No have any comment"
    }), 404

# COMMENT BY POST
@api.route('/comments/<post_id>/', methods=['GET'])
def commet_by_post(post_id):
    comments = Comments.query.filter(Comments.post_id == post_id).all()
    comments_by_id = []
 # no me deja esta validación para cuando el post no exista
    if not comments is None: 
        for i in range(len(comments)):
            comments_by_id.append(comments[i].serialize())

        return jsonify({
            "comments by post":comments_by_id
        }), 201

    return jsonify({
        "msg":"this post not have any like"
    }), 404


# DELETE COMMENTS
@api.route('/comments/<int:comment_user_id>/<int:comment_id>/', methods=['DELETE'])
def delete_comments(comment_user_id, comment_id):
    user = User.query.filter(User.id == comment_user_id).first()
    comment = Comments.query.filter(Comments.id == comment_id).first()

    if not user is None:

        if not comment is None:

            db.session.delete(comment) 
            db.session.commit()

            return jsonify({
                "success":"comment has been remove successfully"
            }), 201

        return jsonify({
            "msg":"this comment doesn't exists"
        }), 404

    return jsonify({
        "msg":"this user doesn't exists"
    }), 404
    



# GENERATE POSTS
@api.route('/posts/<int:user_id>', methods=['POST'])
def post(user_id):
    user = User.query.filter(User.id == user_id).first()
    text = request.json.get("text")

    post = Post(user_id = user_id, text = text) # <------

    if user.is_active == True:

        db.session.add(post)
        db.session.commit()

        return jsonify({
            "success":"publicaction generate successfully"
        }), 200

    return jsonify({
        "msg":"user doesn't exists"
    }), 404


# ALL FAVORITES LIST
@api.route('/favorites/', methods=['GET'])
def favorites():
    favorites = Favorites.query.filter(Favorites.__tablename__ == "favorites").all()

    all_favorites_list = []

    if len(favorites) > 0:
        for i in range(len(favorites)):
            all_favorites_list.append(favorites[i].serialize())

        return jsonify({
            "favorites list":all_favorites_list
        }), 201

    return jsonify({
        "msg":"doesn't exists any product like favorite"
    }), 404

# FAVORITES BY USER
@api.route('/favorites/<int:user_id>/', methods=['GET'])
def user_favorites(user_id):
    user = User.query.filter(User.id == user_id).first()
    favorites = Favorites.query.filter(Favorites.user_id == user_id).all()

    user_favorites = []

    if not user is None:

        if len(favorites) > 0:

            for i in range(len(favorites)):
                user_favorites.append(favorites[i].serialize())

            return jsonify({
                "user favorites":user_favorites
            }), 201

        return jsonify({
            "msg":"this user doesn't have any favorite"
        }), 404

    return jsonify({
        "msg":"this user doesn't exists"
    }), 404




# ADD PRODUCT TO FAVORITE LIST
@api.route('/favorites/add/<int:user_id>/<int:product_id>/', methods=['POST'])
def add_favorites(user_id, product_id):
    user = User.query.filter(User.id == user_id).first()
    product = Products.query.filter(Products.id == product_id).first()
    favorite_id = Favorites.query.filter(Favorites.product_id == product_id).first() # PARA VALIDAR QUE EL PRODUCTO NO SE ENCUENTRA YA COMO FAVORITO
    add_favorites = Favorites(user_id = user_id, product_id = product_id)

    if not user is None:

        if not product is None and product.avaliable == True:

            if favorite_id is None:

                db.session.add(add_favorites)
                db.session.commit()

                return jsonify({
                    "success":"product has been added to favorites"
                }), 201

            return jsonify({
                "msg":"product already exists in favorites"
            }), 404

        return jsonify({
            "msg":"product doesn't exists"
        }), 404

    return jsonify({
        "msg":"user doesn't exists"
    }), 404




# ALL SHOPPING CART LIST
@api.route('/shopping_cart/', methods=['GET'])
def shopping_cart():
    shoppingcart = ShoppingCart.query.filter(ShoppingCart.__tablename__ == "shoppingcart").all()

    all_shoppingcart_list = []

    if len(shoppingcart) > 0:
        for i in range(len(shoppingcart)):
            all_shoppingcart_list.append(shoppingcart[i].serialize())

        return jsonify({
            "shopping cart list":all_shoppingcart_list
        }), 201

    return jsonify({
        "msg":"shopping cart not have products"
    }), 404


# SHOPPING CART LIST BY USER
@api.route('/shopping_cart/<int:user_id>/')
def user_shoppingcart(user_id):
    shoppingcart_products = ShoppingCart.query.filter(ShoppingCart.user_id == user_id).all()
    user_shoppingcart = []

    if len(shoppingcart_products) > 0:
        for i in range(len(shoppingcart_products)):
            user_shoppingcart.append(shoppingcart_products[i].serialize())

        return jsonify({
            "user shopping cart":user_shoppingcart
        }), 201

    return jsonify({
        "msg":"this user don't have any product in shopping cart"
    }), 404

##########################################
# ADD PRODUCT TO SHOPPING CART ## SALE MEJOR GENERAR LA VALIDACIÓN DEL USUARIO POR LA RUTA
@api.route('/cart/add/<int:user_id>/<int:product_id>/', methods=['POST'])
def add_product_to_cart(user_id, product_id):
    user = User.query.filter(User.id == user_id).first()
    product = Products.query.filter(Products.id == product_id).first()
    shoppingcart_id = ShoppingCart.query.filter(ShoppingCart.product_id == product_id).first()
    add_shoppingCart = ShoppingCart(user_id = user_id, product_id = product_id)

    if not user is None:
        if not product is None and product.avaliable == True:

            if shoppingcart_id is None:

                db.session.add(add_shoppingCart)
                db.session.commit()

                return jsonify({
                    "success":"product has been added to shopping cart"
                }), 201
                
            return jsonify({
                "msg":"product already exists in shopping cart"
            }), 404

        return jsonify({
            "msg":"product doesn't exists"
        }), 404

    return jsonify({
        "msg":"user doesn't exists"
    }), 404
        

# GET ALL POSTS (FEED)
@api.route('/posts/', methods=['GET'])
def get_post():
    posts = Post.query.filter(Post.__tablename__ == "post").all()
    all_posts = []

    if not posts is None:
    
        for i in range(len(posts)):
            all_posts.append(posts[i].serialize())

        if len(all_posts) > 0:

            return jsonify({
                "all posts":all_posts
            }), 200
        
    
    return jsonify({
        "msg":"not exists any post to show"
    }), 404


# GET EACH POST
@api.route('/posts/<int:post_id>/')
def each_post(post_id):
    post = Post.query.filter(Post.id == post_id).first()

    if post is None:
        return jsonify({
            "msg":"post doesn't exists"
        }), 404

    return jsonify({
        "post":post.serialize()
    }), 202


# (GET) POST BY EACH USER
@api.route('/posts/user/<int:user_id>/', methods=['GET'])
def post_user(user_id):
    user = User.query.filter(User.id == user_id).first()
    posts = Post.query.filter(Post.user_id == user_id).all()

    all_user_post = []


    if not user is None:

        if len(posts) > 0:

            for i in range(len(posts)):
                all_user_post.append(posts[i].serialize())

            return jsonify({
                "user posts":all_user_post
            }), 201
        
        return jsonify({
            "msg":"This user not have posts to show"
        })

    return jsonify({
        "msg":"This user doesn't exists"
    }), 404




# CATEGORIES
@api.route('/products/categories/', methods=['GET'])
def categories():
    categories = Categories.query.filter(Categories.__tablename__ == "categories").all()
    all_categories = []

    for i in range(len(categories)):
        all_categories.append(categories[i].serialize())

    if len(categories) > 0:
        return jsonify({
            "Categories":all_categories
        }), 201


    return jsonify({
        "msg":"No categories avaliables"
    }), 404




# POST PRODUCTS
@api.route('/products/<int:user_id>/', methods=['POST'])
def post_products(user_id):
    name = request.json.get("name")
    description = request.json.get("description")
    price = request.json.get("price")
    quantity = request.json.get("quantity")
    avaliable = request.json.get("avaliable")
    post_products = Products(name = name, description = description, price = price, quantity = quantity, avaliable = avaliable)
    user = User.query.filter(User.id == user_id).first()

    if not user is None:
            

        db.session.add(post_products)
        db.session.commit()

        return jsonify({
            "success":"product post successfully"
        }), 201

    return jsonify({
        "msg":"user doesn't exists"
    }), 404


# PRODUCTS BY USER
@api.route('/products/user/<int:user_id>/', methods=['GET'])
def user_products(user_id):
    user = User.query.filter(User.id == user_id).first()
    products = Products.query.filter(Products.user_id == user_id).all()

    all_user_products = []

    if not user is None :

        for i in range(len(products)):
            if products[i].avaliable == True:
                all_user_products.append(products[i].serialize())
            continue

        if len(all_user_products) > 0:
            return jsonify({
                "user products":all_user_products
            }), 201

        return jsonify({
            "msg":"this user doesn't have products posted"
        }), 404

    return jsonify({
        "msg":"this user doesn't exists"
    }), 404



# DEACTIVATE PRODUCTS
@api.route('/products/deactivate/<int:product_id>/', methods=['PUT'])
def deactivate_product(product_id):
    product = Products.query.filter(Products.id == product_id).first()

    if product.avaliable == True:

        product.avaliable = False

        db.session.add(product)
        db.session.commit()

        return jsonify({
            "success":"now the product isn't avaliable"
        }), 201

    return jsonify({
        "msg":"this product doesn't is active now"
    }), 404


# ACTIVATE PRODUCTS
@api.route('/products/activate/<int:product_id>/', methods=['PUT'])
def activate_product(product_id):
    product = Products.query.filter(Products.id == product_id).first()

    if product.avaliable == False:

        product.avaliable = True

        db.session.add(product)
        db.session.commit()

        return jsonify({
            "success":"now the product is avaliable"
        }), 201

    return jsonify({
        "msg":"this product doesn't is inactive now"
    }), 404
    

# ALL PRODUCTS
@api.route('/products/', methods=['GET'])
def products():
    products = Products.query.filter(Products.__tablename__ == "products").all()
    all_products = []

    for i in range(len(products)):
        if products[i].avaliable == False:
            continue

        all_products.append(products[i].serialize())

    if len(all_products) > 0:
        return jsonify({
            "Products":all_products
        }), 201


    return jsonify({
        "msg":"No products avaliables"
    }), 404




# EACH PRODUCT
@api.route('/products/<int:product_id>/')
def each_product(product_id):
    product = Products.query.filter(Products.id == product_id).first()

    if not product is None and product.avaliable == True:
        return jsonify({
            "product":product.serialize()
        }), 201

    return jsonify({
        "msg":"product not found"
    }), 401




# DELETE ALL PRODUCTS
@api.route('/delete/products/', methods=['DELETE'])
def delete_products():
    products = Products.query.filter(Products.__tablename__ == "products").all()

    if len(products) == 0:
        return jsonify({
            "msg":"No exists products to delete"
        }), 404

    for i in range(len(products)):
        db.session.delete(products[i])
        db.session.commit()

    return jsonify({
        "success":"all products has been delete"
    }), 201



# DELETE EACH PRODUCT ## HACER MEDIANTE PUT
@api.route('/delete/products/<int:product_id>/', methods=['DELETE'])
def delete_product(product_id):
    products = Products.query.filter(Products.id == product_id).first()

    if not products is None and products.avaliable == True:


        db.session.delete(products)
        db.session.commit()

        return jsonify({
            "success":"The product has been delete successfully"
        }), 201

    return jsonify({
        "msg":"the product doesn't exists"
    }), 404





# USER SIGNUP
@api.route('/signup/', methods=['POST'])
def signup():
    email = request.json.get("email")
    password = request.json.get("password")
    is_active = request.json.get("is_active")
    name = request.json.get("name")
    surname = request.json.get("surname")
    signup = User(email = email, password = cripto.generate_password_hash(password).decode("utf-8"), is_active = is_active, name = name, surname = surname)
    users = User.query.filter(User.email == email).first()

    if not users is None:

        return jsonify({
            "msg":"User already exist"
        }), 404

    db.session.add(signup)
    db.session.commit()

    return jsonify({
        "msg":"User create succefully"
    }), 201




# ALL USERS
@api.route('/users/', methods=['GET'])
def users():
    users = User.query.filter(User.__tablename__ == "user").all()
    all_users = []

    print(users)
    if not users is None:

        for i in range(len(users)):
            if users[i].is_active == False: # para que salte el usuario si no esta activo
                continue

            all_users.append(users[i].serialize())

        if len(all_users) > 0:
            return jsonify({
                "users":all_users
            }), 201

    return jsonify({
            "msg":"No have any user"
        }), 404




@api.route('/userdata/', methods=['GET'])
@jwt_required() # automaticamente protege la ruta la cual se le indique
def user_data():
    user_id = get_jwt_identity() #me trae la info del token junto al id vinculado (identity = user.id), por lo que se puede saber que usuario está haciendo la petición y restringir a que recursos ese usuario va a tener acceso
    user = User.query.get(user_id) # con este id solo se accede a la información de ese usuario y de más nadie
    return jsonify({
        "user":user.serialize() 
    })



# LOGOUT SESSION
@api.route('/logout/', methods=['POST'])
@jwt_required()
def user_logout():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    blocked_token=TokenBlocklist(jti=jti, created_at=now)
    db.session.add(blocked_token)
    db.session.commit()
    return jsonify(msg="JWT revoked")











#@api.route('/posts/<int:user_id>/<int:post_id>/', methods=['DELETE']) 
# PREGUNTAR COMO HACER ESA LINEA



    
    


