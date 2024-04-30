from flask_cors import cross_origin
from flask_restful import Resource
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
    def get(self):
        return Good.findById(), 200