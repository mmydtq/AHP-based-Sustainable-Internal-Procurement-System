from flask_cors import cross_origin
from flask_restful import Resource, reqparse
from good import Good

class MainDisplay(Resource):
    @cross_origin()
    def get(self):
        return Good.findForSlide(), 200
    
class Display(Resource):
    @cross_origin()
    def get(self):
        return Good.findall(), 200
    
class SingleDisplay(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True)
        args = parser.parse_args()
        id = args['id']
        print(Good.findById(id))
        return Good.findById(id), 200