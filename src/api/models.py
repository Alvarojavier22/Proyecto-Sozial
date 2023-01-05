from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Signup(db.Model):
    __tablename__ = "signup"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=False, nullable=False)
    surname = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(280), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Signup {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name":self.name,
            "surname":self.surname,
            "email":self.email,
            "is_active":self.is_active
        }

class Products(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True)
    categories = db.Column(db.String(50), nullable=False)
    product_id = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(300), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    avaliable = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Products {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "categories":self.categories,
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

    def __repr__(self):
        return f'<Categories {self.name}>'

    def serialize(self):
        return {
            "name": self.name
        }

