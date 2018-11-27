from trelli import db, ma

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text(), nullable=False, unique=True)
    password = db.Column(db.Text(), nullable=False, default='')
    boards = db.relationship('Board')

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        include_fk = True

user_schema = UserSchema()
users_schema = UserSchema(many=True)
