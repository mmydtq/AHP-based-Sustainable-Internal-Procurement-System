from database import db
import json

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
                'tag': json.loads(good.tag),
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
                'tag': json.loads(good.tag),
                'name': good.name,
                'value': good.value,
                'description': good.description,
                'hint': good.hint
            })
        return {'goods': goods_list}