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
            "is_active":self.is_active
        }

class Products(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, unique=True, nullable=False)
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
            #"categories":self.categories.serialize(), # MISMO PROBLEMA CON EL TEMA DE HACER EL POST DESDE EL POSTMAN
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

    
class Post(db.Model):
    __tablename__ = "post"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(1000), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(User)

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


class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)

