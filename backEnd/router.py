# 用于测试的类，没有实质作用
from database import db;
from flask_restful import Resource

class test(db.Model):
    testid = db.Column(db.Integer, primary_key=True)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

# def setRouter(app):
#     @app.route('/')
#     def database_test():
#         try:
#             result = test.query.first()
#             return "Database connection successful!"
#         except Exception as e:
#             return "Database connection failed: " + str(e)


# def setRouter(app):