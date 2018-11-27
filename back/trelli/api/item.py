from flask import request
from trelli import app
from trelli.models import *
from trelli.api.authToken import auth
from datetime import datetime
import dateutil.parser

@app.route("/items", methods=["GET"])
@auth
def list_item():
    q = Item.query.join(Board)

    if 'board_id' in request.args:
        q = q.filter(Item.board_id == request.args['board_id'])

    return items_schema.jsonify(q.all())

@app.route("/items/<id>", methods=["GET"])
@auth
def get_item(id):
	item = Item.query.filter(Item.id == id).first_or_404()
	return item_schema.jsonify(item)

@app.route("/items", methods=["POST"])
@auth
def create_item():
    i = Item(**request.json)
    db.session.add(i)
    db.session.commit()
    return item_schema.jsonify(i)

@app.route("/items/<id>", methods=["PUT"])
@auth
def update_item(id):
    updt_item = Item.query.filter(Item.id == id).first_or_404()
    updt_item.title = request.json['title']
    db.session.commit()
    return item_schema.jsonify(updt_item)

@app.route("/items/<id>", methods=["DELETE"])
@auth
def delete_item(id):
	it = Item.query.filter(Item.id == id).first_or_404()
	db.session.delete(it)
	db.session.commit()
	return "", 200
