from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
import json
from flask_cors import cross_origin

app = Flask(__name__)
api = Api(app)

class GetFormBig(Resource):
    @cross_origin()
    def post(self):
        try:
            # Create a request parser to validate incoming data
            parser = reqparse.RequestParser()
            parser.add_argument('key', type=str, help='Key for identification')
            parser.add_argument('name', type=str, help='Name of the item')
            parser.add_argument('value', type=int, help='Value of the item')
            parser.add_argument('address', type=str, help='Address or department')
            parser.add_argument('tags', type=list, location='json', help='Tags associated with the item')
            parser.add_argument('brief', type=str, help='Brief description of the item')
            parser.add_argument('number', type=int, help='Quantity or count of the item')

            # Parse the incoming request data
            args = parser.parse_args()

            # Extract the arguments
            key = args.get('key', 'default_key')  # Provide a default value if none is given
            name = args.get('name', 'Default Name')
            value = args.get('value', 0)
            address = args.get('address', 'Default Address')
            tags = args.get('tags', [])
            brief = args.get('brief', 'Default Brief')
            number = args.get('number', 0)

            # Convert tags list to JSON string
            tags_json = json.dumps(tags)

            # Construct the response data based on the provided specification
            response_data = {
                "data": [
                    {
                        "key": key,
                        "name": name,
                        "value": value,
                        "address": address,
                        "tag": tags_json,
                        "brief": brief,
                        "number": number
                    }
                ]
            }

            # Return the response data with a success code
            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400