from flask import jsonify
from flask_restful import Resource, reqparse
from user import User

class Register(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('password', type=str, required=True)
        parser.add_argument('phone', type=int, required=True)
        parser.add_argument('room', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('uName', type=str, required=True)
        args = parser.parse_args()

        status = User.findRepeat(args['uName'], args['room'], args['email'], args['phone'])
        if status == 0:
            User.addUser(args['uName'], args['room'], args['email'], args['phone'], args['password'])

        return jsonify({"status": status}), 200
    
class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('uName', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        status = User.checkLogin(args['uName'], args['password'])
        userinfo = User.getUser(args['uName'])

        return jsonify({"status": status,
                        "user": userinfo}), 200
    
class RePassword(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('uName', type=str, required=True)
        parser.add_argument('rePassword', type=str, required=True)
        args = parser.parse_args()

        status = User.rePassword(args['uName'], args['rePassword'])

        return jsonify({"status": status}), 200