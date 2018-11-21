from trelli import db, ma
from datetime import datetime

class Board(db.Model):
    __tablename__ = "board"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=True)
    posted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    items = db.relationship('Item')

class BoardSchema(ma.ModelSchema):
    class Meta:
        model = Board
        exclude = ("items",)

board_schema = BoardSchema()
boards_schema = BoardSchema(many=True)
