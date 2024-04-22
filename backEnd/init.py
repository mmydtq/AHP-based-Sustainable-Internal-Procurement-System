import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from database import db
from router import HelloWorld
from flask_restful import Api
from register import Register, Login, RePassword
from present import MainDisplay, Display, SingleDisplay
from shopping import AddToCart, DeleteFromCart, GetCartGoods
from good import FindGood, Recommend

def create_app():
    app = Flask(__name__)
    basedir = os.path.abspath(os.path.dirname(__file__))
    db_path = os.path.join(basedir, 'database.db')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.debug = True
    api = Api(app)
    # 路由路径待定
    api.add_resource(HelloWorld, '/') #for testing
    api.add_resource(Register, '/Register/register')
    api.add_resource(Login, '/login/login')
    api.add_resource(RePassword, '/login/changePassword')
    api.add_resource(MainDisplay, '/HomePage/mainDisplay')
    api.add_resource(Display, '/HomePage/display')
    api.add_resource(SingleDisplay, '/Goods/getGoodInfo')
    api.add_resource(AddToCart, '/Fancy/addToCart')
    api.add_resource(DeleteFromCart, '/Fancy/deleteGood')
    api.add_resource(GetCartGoods, '/Fancy/showGoods')
    api.add_resource(FindGood, '/Good/FindGood') 
    api.add_resource(Recommend, '/Good/recommend') 
    return app

def create_database(app):
    db.init_app(app)



# app.config['MYSQL_HOST'] = 'LAPTOP-12893DCP'
# app.config['MYSQL_USER'] = 'eric'
# app.config['MYSQL_PASSWORD'] = 'Xingyangniubi1!'
# app.config['MYSQL_DB'] = 'group9'
# mysql = MySQL(app)
# conn = MySQLdb.connect(host='LAPTOP-12893DCP', user='eric', password='Xingyangniubi1!', database='group9')
# setRouter(app,mysql)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://developer:Xingyangniubi1!@10.26.67.241:3306/group9?connect_timeout=10'
    
# db.create_all
#setRouter(app)

# class test(db.Model):
#     testid = db.Column(db.Integer, primary_key=True)
#     testname = db.Column(db.String(255), unique=True, nullable=False)

# @app.route('/')
# def database_test():
#     try:
#         test.query.first()
#         return jsonify({'message': 'Database connection successful'})
#     except Exception as e:
#         return jsonify({'message': 'Database connection failed', 'error': str(e)})