"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Signup, Products, Categories
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

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
    signup = Signup(email = email, password = password, is_active = is_active, name = name, surname = surname)
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

# ALL USERS

@api.route('/users/', methods=['GET'])
def users():
    users = Signup.query.filter(Signup.__tablename__ == "signup").all()
    all_users = []

    if users is None:
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


