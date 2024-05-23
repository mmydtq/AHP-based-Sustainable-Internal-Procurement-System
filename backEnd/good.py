from database import db
import json
from flask import jsonify, request
from flask_restful import Resource, reqparse
from flask_cors import cross_origin

class Good(db.Model):
    __tablename__ = 'goods'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255))
    environmental_value = db.Column(db.Integer)
    brief = db.Column(db.String(255))

    # 以json字符串形式存储tag  使用json.dumps(array)将数组转化为json字符串 使用json.loads(tag)将json字符串转化为数组
    tag = db.Column(db.String(255))
    
    name = db.Column(db.String(255))
    value = db.Column(db.Integer)
    description = db.Column(db.String(255))
    hint = db.Column(db.Integer)


    @staticmethod
    def findForSlide():
        goods_list = []
        goods = Good.query.order_by(Good.environmental_value.desc()).limit(6).all()
        if len(goods) < 6:
            raise ValueError('The number of goods is less than 6.')
        for good in goods:
            goods_list.append({
                'id': good.id,
                'url': good.url,
                'environmentalValue': good.environmental_value,
                'brief': good.brief,
                # 'tag': json.loads(good.tag),
                'tag': '[aaa]',
                'name': good.name,
                'value': good.value,
                'description': good.description,
                'hint': good.hint
            })
        return {'goods': goods_list}
    
    @staticmethod
    def findall():
        goods_list = []
        goods = Good.query.all()
        for good in goods:
            goods_list.append({
                'id': good.id,
                'url': good.url,
                'environmentalValue': good.environmental_value,
                'brief': good.brief,
                # 'tag': json.loads(good.tag),
                'tag': '[aaa]',
                'name': good.name,
                'value': good.value,
                'description': good.description,
                'hint': good.hint
            })
        return {'goods': goods_list}
    
    @staticmethod
    def findById(given_id):
        good = Good.query.filter_by(id=given_id).first()
        if not good:
            return None
        return {
                'good': {
                'id': good.id,
                'url': good.url,
                'environmentalValue': good.environmental_value,
                'brief': good.brief,
                'tag': json.loads(good.tag),
                'name': good.name,
                'value': good.value,
                'description': good.description,
                'hint': good.hint
            }
        }
    
class RecommendGoods(Resource):
    @cross_origin()
    def post(self):
        # Create a request parser to extract the product ID
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True, help='Product ID is required')
        args = parser.parse_args()
        
        # Find the good based on the given ID
        given_id = args['id']
        good = Good.query.filter_by(id=given_id).first()
        
        if not good:
            return {"error": "Good not found"}, 404
        
        # Find similar goods based on environmental value, or some other criteria
        # Here we just select the top 5 goods with similar environmental value
        recommended_goods = Good.query.order_by(Good.environmental_value.desc()).limit(5).all()
        
        goods_list = []
        for g in recommended_goods:
            goods_list.append({
                'id': g.id,
                'url': g.url,
                'environmentalValue': g.environmental_value,
                'brief': g.brief,
                'tag': json.loads(g.tag),
                'name': g.name,
                'value': g.value,
                'description': g.description,
                'hint': g.hint
            })
        
        return {"goods": goods_list}, 200


class FindGoodsByTags(Resource):
    @cross_origin()
    def post(self):
        # Create a request parser to extract the single tag keyword
        parser = reqparse.RequestParser()
        parser.add_argument('tag', type=str, location='json', required=True, help='Tag keyword is required')
        args = parser.parse_args()

        tag_keyword = args['tag']

        # Find goods that contain the given tag keyword in their tags list
        matching_goods = Good.query.filter(
            Good.tag.like(f'%{tag_keyword}%')
        ).all()

        goods_list = []
        for good in matching_goods:
            tags_list = json.loads(good.tag)
            if tag_keyword in tags_list:
                goods_list.append({
                    'id': good.id,
                    'url': good.url,
                    'environmentalValue': good.environmental_value,
                    'brief': good.brief,
                    'tag': tags_list,
                    'name': good.name,
                    'value': good.value,
                    'description': good.description,
                    'hint': good.hint
                })
        
        return {"goods": goods_list}, 200