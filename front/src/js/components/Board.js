import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteBoard } from "../actions/boardActions"
import { NavLink } from "react-router-dom"

class Board extends Component {
  constructor(props) {
    super(props)

    this.removeBoard = this.removeBoard.bind(this)
  }

  removeBoard(boardId) {
    this.props.deleteBoard(boardId)
  }

  render() {
    return (
      <div className="container p-0" onClick={this.handleClick}>
        {this.props.boards.map((board, key) => {
          if(board.image !== "") {
            return (
              <div className="t-block-board d-inline-block position-relative" key={key}>
                <div className="position-absolute">
                  <img className="t-background-image" src={board.image}/>
                </div>
                <div className="position-absolute">
                  <NavLink to={"/dashBoard/" + board.id} activeStyle={{ color: "darkBlue" }}><h5 className="text-white d-inline-block p-2 font-weight-bold">{board.title}</h5></NavLink>
                </div>
                <button className="close text-light p-2" onClick={ ()=> {this.removeBoard(board.id)}}>
                  <span>&times;</span>
                </button>
              </div>
            )
          } else {
            return (
              <div className="t-block-board d-inline-block position-relative" key={key}>
                <div className="container p-0 mb-2 position-absolute">
                  <div className="t-block-board-default"></div>
                </div>
                <div className="position-absolute">
                  <NavLink to={"/dashBoard/" + board.id} activeStyle={{ color: "darkBlue" }}><h5 className="text-white d-inline-block p-2 font-weight-bold">{board.title}</h5></NavLink>
                </div>
                <button className="close text-light p-2" onClick={ ()=> {this.removeBoard(board.id)}}>
                  <span>&times;</span>
                </button>
              </div>
            )
        }})}
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    deleteBoard: (boardId) => { dispatch(deleteBoard(boardId)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
