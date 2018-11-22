import React, { Component } from "react"
import { connect } from "react-redux"
import pathTime from "../../styles/images/time.png"
import pathPersonal from "../../styles/images/personal.png"
import { fetchBoards, updateBoard, deleteBoard } from "../actions/boardActions"

class Board extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("READ_BOARDS", this.props.fetchBoards)
    this.props.fetchBoards()
  }

  render() {
    let renderBoards = this.props.boards.map((board, key) => {
      return (
        <div className="t-block-board d-inline-block" key={key}>
          <div className="container p-2 bg-dark text-light">
            <h6 className="t-title-board d-inline-block">{board.title}</h6>
            <p className="mb-0 d-inline-block float-right">{board.posted_at.substr(0, 10)}</p>
            <img className="t-background-image" src={board.image}/>
          </div>
        </div>
      )})

    return (
      <div className="container mw-100 p-0">
        <div className="container mw-100 p-0">
          <div className="row">
            <div className="container mb-2">
              <img alt="logo-time" className="t-logo-time mr-2 ml-1" src={pathTime} /><h5 className="d-inline">Recently Viewed</h5>
            </div>
          </div>
          <div className="container mw-100 p-0 mb-2">
            <div className="t-block-last-viewed"><h6 className="t-title-board text-light p-2">Untitled Board</h6></div>
          </div>
          <div className="row">
            <div className="container mb-2">
              <img alt="logo-personal" className="t-logo-personal" src={pathPersonal} /><h5 className="d-inline">Personal Boards</h5>
            </div>
          </div>
          <div className="container mw-100 p-0">
            {renderBoards}
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
