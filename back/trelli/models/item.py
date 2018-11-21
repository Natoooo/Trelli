from trelli import db, ma
from datetime import datetime

class Item(db.Model):
    __tablename__ = "item"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    posted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    board_id = db.Column(db.Integer, db.ForeignKey('board.id'), nullable=False)

class ItemSchema(ma.ModelSchema):
    class Meta:
        model = Item
        include_fk = True

item_schema = ItemSchema()
items_schema = ItemSchema(many=True)
