from flask import request, g
from trelli import app
from trelli.models import *
from trelli.api.authToken import auth
from datetime import datetime
import dateutil.parser

@app.route("/boards", methods=["GET"])
@auth
def list_boards():
    q = Board.query.join(User)

    if 'user_id' in request.args:
        q = q.filter(Board.user_id == request.args['user_id'])

    return items_schema.jsonify(q.all())

@app.route("/boards/<id>", methods=["GET"])
@auth
def get_board(id):
    board = Board.query.filter(Board.id == id).first_or_404()

    if board.user_id != g.user.id:
        return ''

    return board_schema.jsonify(board)

@app.route("/boards", methods=["POST"])
@auth
def create_board():
    b = Board(**request.json)
    b.user_id = g.user_id
    db.session.add(b)
    db.session.commit()
    return board_schema.jsonify(b)

@app.route("/boards/<id>", methods=["PUT"])
@auth
def update_board(id):
    updt_board = Board.query.filter(Board.id == id).first_or_404()

    if updt_board.user_id != g.user.id:
        return '', 404

    updt_board.title = request.json['title']
    updt_board.image = request.json['image']
    db.session.commit()
    return board_schema.jsonify(updt_board)

@app.route("/boards/<id>", methods=["DELETE"])
@auth
def delete_board(id):
    bo = Board.query.filter(Board.id == id).first_or_404()

    if bo.user_id != g.user.id:
        return '', 404

    db.session.delete(bo)
    db.session.commit()
    return "", 200
