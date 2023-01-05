"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Signup, Products, Categories, TokenBlocklist
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from datetime import datetime, timezone # para el cierre de sesión
from flask_bcrypt import Bcrypt


api = Blueprint('api', __name__)

cripto = Bcrypt(Flask(__name__))

@api.route('/social/', methods=['GET'])
def social():
    return jsonify({
        "msg":"social screen"
    })

# SIGNUP

@api.route('/signup/', methods=['POST'])
def signup():
    email = request.json.get("email")
    password = request.json.get("password")
    is_active = request.json.get("is_active")
    name = request.json.get("name")
    surname = request.json.get("surname")
    signup = Signup(email = email, password = cripto.generate_password_hash(password).decode("utf-8"), is_active = is_active, name = name, surname = surname)
    users = Signup.query.filter(Signup.email == email).first()

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

# LOGIN

@api.route('/login/',  methods=['POST'])
def user_login():
    email=request.json.get('email')
    password=request.json.get('password')
    user=Signup.query.filter(Signup.email==email).first()
    # No encuentro Usuario

    if user == None:
        print(("Correo invalido"))
        return jsonify({"msg":"Inicio de sesion invalido"}), 401

# Validacion de la clave
    if cripto.check_password_hash(user.password, password):
    # if user.password==password:
        print("Clave ok")
        access_token=create_access_token(identity=user.id)
        refresh_token=create_refresh_token(identity=user.id)
        return jsonify({"token":access_token, "refresh":refresh_token}), 200

    else:
    # Clave Invalida
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

@api.route('/logout', methods=['POST'])
@jwt_required()
def user_logout():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    blocked_token=TokenBlocklist(jti=jti, created_at=now)
    db.session.add(blocked_token)
    db.session.commit()
    return jsonify(msg="JWT revoked")


# ALL USERS

@api.route('/users/', methods=['GET'])
def users():
    users = Signup.query.filter(Signup.__tablename__ == "signup").all()
    all_users = []

    if len(users) == 0:
        return jsonify({
            "msg":"No have any user"
        }), 404

    for i in range(len(users)):
        all_users.append(users[i].serialize())

    if len(all_users) > 0:
        return jsonify({
            "users":all_users
        }), 201



# CATEGORIAS

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



# TODOS LOS PRODUCTOS

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


# CADA PRODUCTO

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


