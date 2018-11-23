import React, { Component } from "react"
import { connect } from "react-redux"
import pathTime from "../../styles/images/time.png"
import pathPersonal from "../../styles/images/personal.png"
import { fetchBoards, updateBoard, deleteBoard } from "../actions/boardActions"

class Board extends Component {
  constructor(props) {
    super(props)

    this.removeBoard = this.removeBoard.bind(this)
  }

  componentDidMount() {
    console.log("READ_BOARDS", this.props.fetchBoards)
    this.props.fetchBoards()
  }

  removeBoard(boardId) {
    this.props.deleteBoard(boardId)
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="container p-0 mb-2">
            <img alt="logo-time" className="t-logo-time mr-2 ml-1" src={pathTime} /><h5 className="d-inline">Recently Viewed</h5>
          </div>
          <div className="container p-0 mb-2">
            <div className="t-block-last-viewed"><h5 className="t-title-board text-light p-2">Untitled Board</h5></div>
          </div>
        </div>

        <div className="row">
          <div className="container p-0 mb-2">
            <img alt="logo-personal" className="t-logo-personal" src={pathPersonal} /><h5 className="d-inline">Personal Boards</h5>
          </div>
          <div className="container p-0">
            {this.props.boards.map((board, key) => {
              return (
                <div className="t-block-board d-inline-block position-relative" key={key}>
                  <div className="position-absolute">
                    <img className="t-background-image" src={board.image}/>
                  </div>
                  <div className="position-absolute">
                    <h5 className="text-white d-inline-block p-2 font-weight-bold">{board.title}</h5>
                  </div>
                  <button className="close text-light p-2" onClick={ ()=> {this.removeBoard(board.id)}}>
                    <span>&times;</span>
                  </button>
                </div>
              )})}
          </div>
        </div>
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
    fetchBoards: () => { dispatch(fetchBoards()) },
    updateBoard: (boardId, title, image) => { dispatch(updateBoard(boardId, title, image)) },
    deleteBoard: (boardId) => { dispatch(deleteBoard(boardId)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
