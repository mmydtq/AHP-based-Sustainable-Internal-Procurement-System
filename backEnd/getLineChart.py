from flask_restful import Resource, reqparse
from flask_cors import cross_origin

class get_line_chart(Resource):
    @cross_origin()
    def post(self):
        try:


            response_data = {
                "date": args['xAxisData'],
                "value1": args['seriesData1'],
                "value2": args['seriesData2'],
                "value3": args['seriesData3']
            }

            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400