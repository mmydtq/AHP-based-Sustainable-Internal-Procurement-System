from datetime import datetime
from database import db

class Item(db.Model):
    __tablename__ = 'items'  
    
    id = db.Column(db.String(255), primary_key=True)
    date = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    key = db.Column(db.String(255), nullable=False, unique=True)
    name = db.Column(db.String(255), nullable=False)
    value = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    tag = db.Column(db.String(255), nullable=False)
    status = db.Column(db.Integer, nullable=False)
    number = db.Column(db.Integer, nullable=False)
