from flask import request
from trelli import app
from trelli.models import *
from datetime import datetime
import dateutil.parser

@app.route("/boards", methods=["GET"])
def list_boards():
    boards = Board.query.all()
    return boards_schema.jsonify(boards)

@app.route("/boards/<id>", methods=["GET"])
def get_board(id):
	board = Board.query.filter(Board.id == id).first_or_404()
	return board_schema.jsonify(board)

@app.route("/boards", methods=["POST"])
def create_board():
    b = Board(**request.json)
    db.session.add(b)
    db.session.commit()
    return board_schema.jsonify(b)

@app.route("/boards/<id>", methods=["PUT"])
def update_board(id):
    updt_board = Board.query.filter(Board.id == id).first_or_404()
    updt_board.title = request.json['title']
    updt_board.image = request.json['image']
    db.session.commit()
    return board_schema.jsonify(updt_board)

@app.route("/boards/<id>", methods=["DELETE"])
def delete_board(id):
	bo = Board.query.filter(Board.id == id).first_or_404()
	db.session.delete(bo)
	db.session.commit()
	return "", 200
