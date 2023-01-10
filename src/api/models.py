from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    surname = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(280), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name":self.name,
            "surname":self.surname,
            "email":self.email,
            "is_active":self.is_active,
            "password":self.password #para las pruebas del cambio de clave
        }

class Products(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, unique=True, nullable=False) # UNA MANERA QUE ESTE ID SEA UN NUMERO RAMDON DE 6 DIGITOS
    user_id = db.Column(db.Integer, unique=False, nullable=False)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    avaliable = db.Column(db.Boolean(), unique=False, nullable=False)
    categorie_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    

    def __repr__(self):
        return f'<Products {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "quantity":self.quantity,
            "avaliable": self.avaliable
        }

class Categories(db.Model):
    __tablename__ = "categories"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    products = db.relationship('Products',backref='categories', lazy=True)

    def __repr__(self):
        return f'<Categories {self.name}>'

    def serialize(self):
        return {
            "name": self.name
        }

class ShoppingCart(db.Model):
    __tablename__ = "shoppingcart"
    id = db.Column(db.Integer, primary_key=True)
    add_cart = db.Column(db.Boolean(), unique=False, nullable=True)
    #user_id = db.Column(db.Integer, db.ForeignKey('user.id')) # PREGUNTAR COMO HACER PARA RELACIONAR DOS MODELOS 
    #user = db.relationship(user)
    user_id = db.Column(db.Integer(), unique=False, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    products = db.relationship(Products)

    def __repr__(self):
        return f'<ShoppingCart {self.name}>'

    def serialize(self):
        return {
            "product_id": self.products.product_id,
            "product_name":self.products.name,
            "user_id": self.user_id
        }


class Post(db.Model):
    __tablename__ = "post"
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    text = db.Column(db.String(1000), unique=False, nullable=False)
    # date = db.Column(db.datetime(), default=datetime.now()) # mirar como colocar la fecha para los posts
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(User)
    likes = db.relationship('Likes', backref='Post', lazy=True)

    def __repr__(self):
        return f'<Post {self.id}>'

    def serialize(self):
        return {
            "text": self.text,
            "post_id": self.id,
            "user_id": self.user_id,
            "user_name": self.user.name+str(" ")+self.user.surname
            # COMO HACER PARA PODER VINCULAR EL USUARIO DESDE EL POSTMAN
        }


class Likes(db.Model):
    __tablename__ = "likes"
    id = db.Column(db.Integer, primary_key=True)
    like_user_id = db.Column(db.Integer(), nullable=False, unique=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=True)
    post = db.relationship(Post)

    def __repr__(self):
        return f'<Likes {self.id}>'

    def serialize(self):
        return {
            "post_id": self.post_id,
            "user_post_id": self.post.user_id,
            "post_content": self.post.text,
            "user_post_name": self.post.user.name,
            "like_user_id": self.like_user_id
        }

class Comments(db.Model):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(2000), unique=False, nullable=False)
    comment_user_id = db.Column(db.Integer(), unique=False, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=True)
    post = db.relationship(Post)

    def __repr__(self):
        return f'<Comments {self.id}>'

    def serialize(self):
        return {
            "comment_id": self.id,
            "post_id": self.post_id,
            "commet":self.comment,
            "user_post_id": self.post.user_id,
            "post_content": self.post.text,
            "user_post_name": self.post.user.name+str(" ")+self.post.user.surname,
            "comment_user_id": self.comment_user_id
        }



class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)

