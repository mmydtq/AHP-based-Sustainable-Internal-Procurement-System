from backEnd.good import Good
from database import db


class Admin(db.Model):
    __tablename__ = 'administrators'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    password = db.Column(db.String(255))
    birth = db.Column(db.Date)
    email = db.Column(db.String(255))

    @staticmethod
    def findRepeat(name, email):
        existing_user = Admin.query.filter_by(name=name).first()
        if existing_user:
            return 1  # 用户名已经存在
        existing_email = Admin.query.filter_by(email=email).first()
        if existing_email:
            return 2  # 邮箱已经存在
        return 0  # 账号注册成功

    @staticmethod
    def addUser(name, email, birth, password):
        new_admin = Admin(name=name, email=email, birth = birth, password=password)
        db.session.add(new_admin)
        db.session.commit()

    @staticmethod
    def checkLogin(name, password):
        a = Admin.query.filter_by(name=name).first()
        if not a:
            return 1  # 用户名不存在
        if a.password == password:
            return 0  # 用户名和密码匹配
        return 1  # 密码不匹配

    @staticmethod
    def add_good(good_id, url, environmentalValue, brief, tag, name, value, description, hint):
        new_good = Good(id=good_id, url=url, environmental_value=environmentalValue, brief=brief, tag=tag,
                        name=name, value=value, description=description, hint=hint)
        db.session.add(new_good)
        db.session.commit()