"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Products, Categories, Post, TokenBlocklist
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from datetime import datetime, timezone # para el cierre de sesión
from flask_bcrypt import Bcrypt


api = Blueprint('api', __name__)

cripto = Bcrypt(Flask(__name__))


# FEED
@api.route('/social/', methods=['GET'])
def social():
    return jsonify({
        "msg":"social screen"
    })



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
    print(signup)

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




# DELETE EACH USER <----------------------------------
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
@api.route('/products/', methods=['POST'])
def post_products():
    product_id = request.json.get("product_id")
    name = request.json.get("name")
    description = request.json.get("description")
    price = request.json.get("price")
    quantity = request.json.get("quantity")
    avaliable = request.json.get("avaliable")
    post_products = Products(product_id = product_id, name = name, description = description, price = price, quantity = quantity, avaliable = avaliable)
    product = Products.query.filter(Products.product_id  == product_id).first()

    if not product is None:
        return jsonify({
            "msg":"product already exists"
        }), 404

    db.session.add(post_products)
    db.session.commit()

    return jsonify({
        "success":"product post successfully"
    }), 201





# ALL PRODUCTS
@api.route('/products/', methods=['GET'])
def products():
    products = Products.query.filter(Products.__tablename__ == "products").all()
    all_products = []

    for i in range(len(products)):
        all_products.append(products[i].serialize())

    if len(products) > 0:
        return jsonify({
            "Products":all_products
        }), 201


    return jsonify({
        "msg":"No products avaliables"
    }), 404




# EACH PRODUCT
@api.route('/products/<int:product_id>/')
def each_product(product_id):
    product = Products.query.filter(Products.product_id == product_id).first()

    if not product is None:
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



# DELETE EACH PRODUCT
@api.route('/delete/products/<int:product_id>/', methods=['DELETE'])
def delete_product(product_id):
    products = Products.query.filter(Products.product_id == product_id).first()

    if not products is None:

        delete_product = products

        db.session.delete(delete_product)
        db.session.commit()

        return jsonify({
            "success":"The product has been delete successfully"
        }), 201

    return jsonify({
        "msg":"the product doesn't exists"
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
    }), 494
        



# GET ALL POSTS
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
    posts = Post.query.filter(Post.user_id == user_id).all()

    all_user_post = []


    if not posts is None:

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
        "msg":"This user doesn't have a posts"
    }), 404


#@api.route('/posts/<int:user_id>/<int:post_id>/', methods=['DELETE']) 
# PREGUNTAR COMO HACER ESA LINEA


# DELETE POST
@api.route('delete/posts/<int:post_id>/', methods=['DELETE'])
def delete_post(post_id):
    posts = Post.query.filter(Post.__tablename__ == "post").all()
    post = Post.query.filter(Post.id == post_id).first()
    all_post = []

    if not post is None:
        
        
        db.session.delete(post)
        db.session.commit()
        
        return jsonify({
            "success":"post has been delete successfully"
        }), 201



    return jsonify({
        "msg":"product doesn't exists"
    }), 404

    
    


