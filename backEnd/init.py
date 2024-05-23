import os
from flask import Flask,Blueprint
from flask_sqlalchemy import SQLAlchemy
from database import db
from router import HelloWorld
from flask_restful import Api
from register import Register, Login, RePassword
from admin_register import AdminRegister, AdminLogin
from admin import AddGoods
from present import MainDisplay, Display, SingleDisplay
from shopping import AddToCart, DeleteGood, ShowGoods,SubmitCart
from order import AdminConfirm
from good import FindGoodsByTags, RecommendGoods
from flask_cors import CORS, cross_origin
from getFormBig import GetFormBig, DeleteFormItem
from getLineChart import get_line_chart
from FromDataList import FormDataList
from getPredictNum import getPredictNum
def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    basedir = os.path.abspath(os.path.dirname(__file__))
    db_path = os.path.join(basedir, 'database.db')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.debug = True
    api = Api(app)
    # 路由路径待定
    # api.add_resource(HelloWorld, '/') #for testing
    # api.add_resource(Register, '/api/Register/register')
    # api.add_resource(Login, '/api/login/login')
    # api.add_resource(RePassword, '/api/login/changePassword')
    # api.add_resource(AdminLogin, '/api/Administer/login')
    # api.add_resource(AdminRegister, '/api/Administer/register')
    # api.add_resource(AddGoods, '/api/Admin/addGood')
    # api.add_resource(MainDisplay, '/api/HomePage/mainDisplay')
    # api.add_resource(Display, '/api/HomePage/display')
    # api.add_resource(SingleDisplay, '/api/Goods/getGoodInfo')
    # api.add_resource(AddToCart, '/api/Fancy/addToCart')
    # api.add_resource(DeleteGood, '/api/Fancy/deleteGood')
    # api.add_resource(ShowGoods, '/api/Fancy/showGoods')
    # api.add_resource(FindGoodsByTags, '/api/Good/FindGood') 
    # api.add_resource(RecommendGoods, '/api/Good/recommend') 
    # api.add_resource(GetFormBig, '/api/getFormBig')
    # api.add_resource(get_line_chart, '/api/component/chart11/getLineChart')
    # api.add_resource(DeleteFormItem, '/api/Admin/deleteFormItem')
    # api.add_resource(FormDataList, '/api/compenont/FormdDataList')
    # api.add_resource(getPredictNum, '/api/pages/administer/getPredictNum')
    # api.add_resource(AdminConfirm, '/api/admin/confirm')
    # api.add_resource(SubmitCart, '/api/Cart/buy')

    api.add_resource(Register, '/Register/register')
    api.add_resource(Login, '/login/login')
    api.add_resource(RePassword, '/login/changePassword')
    api.add_resource(AdminLogin, '/Administer/login')
    api.add_resource(AdminRegister, '/Administer/register')
    api.add_resource(AddGoods, '/Admin/addGood')
    api.add_resource(MainDisplay, '/HomePage/mainDisplay')
    api.add_resource(Display, '/HomePage/display')
    api.add_resource(SingleDisplay, '/Goods/getGoodInfo')
    api.add_resource(AddToCart, '/Fancy/addToCart')
    api.add_resource(DeleteGood, '/Fancy/deleteGood')
    api.add_resource(ShowGoods, '/Fancy/showGoods')
    api.add_resource(FindGoodsByTags, '/Good/findGood') 
    api.add_resource(RecommendGoods, '/Good/recommend') 
    api.add_resource(GetFormBig, '/getFormBig')
    api.add_resource(get_line_chart, '/component/chart11/getLineChart')
    api.add_resource(DeleteFormItem, '/Admin/deleteFormItem')
    api.add_resource(FormDataList, '/compenont/FormdDataList')
    api.add_resource(getPredictNum, '/pages/administer/getPredictNum')
    api.add_resource(AdminConfirm, '/admin/confirm')
    api.add_resource(SubmitCart, '/Cart/buy')
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