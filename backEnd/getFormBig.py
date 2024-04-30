from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
import json

app = Flask(__name__)
api = Api(app)

class GetFormBig(Resource):
    def post(self):
        try:
            # Create a request parser to validate incoming data
            parser = reqparse.RequestParser()
            parser.add_argument('key', type=str, required=True, help='Key is required')
            parser.add_argument('name', type=str, required=True, help='Name is required')
            parser.add_argument('value', type=int, required=True, help='Value is required')
            parser.add_argument('address', type=str, required=True, help='Address is required')
            parser.add_argument('tags', type=list, location='json', required=True, help='Tags are required')

            # Parse the incoming request data
            args = parser.parse_args()

            # Extract the arguments
            key = args['key']
            name = args['name']
            value = args['value']
            address = args['address']
            tags = args['tags']

            # Convert tags list to JSON string
            tags_json = json.dumps(tags)

            # Construct the response data based on the provided specification
            response_data = {
                "id": key,
                "name": name,
                "value": value,
                "address": address,
                "tag": tags_json
            }

            # Return the response data with a success code
            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400