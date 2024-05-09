from flask import Flask
from flask_restful import Resource, Api, reqparse
import json
from item import Item
from flask_cors import cross_origin
from database import db

app = Flask(__name__)
api = Api(app)

class GetFormBig(Resource):
    @cross_origin()
    def post(self):
        try:
            # Query all items from the database
            items = db.session.query(Item).all()
            
            # Transform the items into the desired response format
            response_data = {
                "data": [
                    {
                        "key": item.key,
                        "name": item.name,
                        "value": item.value,
                        "address": item.address,
                        "tag": json.loads(item.tag),  
                        "brief": item.category,  
                        "number": item.number
                    }
                    for item in items
                ]
            }

            # Return the response data with a success code
            return response_data, 200

        except Exception as e:
            # Return an error response with an appropriate message
            return {"error": str(e)}, 400
        
class DeleteFormItem(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str, required=True, help='ID is required for deletion')

        args = parser.parse_args()
        item_id = args['id']

        try:
            item_to_delete = db.session.query(Item).filter_by(id=item_id).first()

            if not item_to_delete:
                return {"status": 1, "error": "Item not found"}, 200

            db.session.delete(item_to_delete)
            db.session.commit()

            return {"status": 0}, 200

        except Exception as e:
            return {"status": 1, "error": str(e)}, 400
