from flask_restful import Resource, reqparse
from flask_cors import cross_origin

class get_line_chart(Resource):
    @cross_origin()
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('xAxisData', type=list, required=True)
            parser.add_argument('seriesData1 ', type=list, required=True, help='Name is required')
            parser.add_argument('seriesData2 ', type=list, required=True, help='Value is required')
            parser.add_argument('seriesData3 ', type=list, required=True, help='Address is required')

            # Parse the incoming request data
            args = parser.parse_args()

            response_data = {
                "date": args['xAxisData'],
                "value1": args['seriesData1'],
                "value2": args['seriesData2'],
                "value3": args['seriesData3']
            }

            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400