import React, { Component } from "react"
import { connect } from "react-redux"
import pathTime from "../../styles/images/time.png"
import pathPersonal from "../../styles/images/personal.png"
import Board from "./Board"
import { fetchBoards, updateBoard, deleteBoard } from "../actions/boardActions"

class Boards extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("READ_BOARDS", this.props.fetchBoards)
    this.props.fetchBoards()
  }

  render() {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="container p-0 mb-2">
            <img alt="logo-time" className="t-logo-time mr-2 ml-1" src={pathTime} /><h5 className="d-inline">Recently Viewed</h5>
          </div>
          <div className="container p-0 mb-2">
            <div className="t-block-board-default"><h5 className="t-title-board text-light p-2">Untitled Board</h5></div>
          </div>
        </div>

        <div className="row">
          <div className="container p-0 mb-2">
            <img alt="logo-personal" className="t-logo-personal" src={pathPersonal} /><h5 className="d-inline">Personal Boards</h5>
          </div>
          <Board />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchBoards: () => { dispatch(fetchBoards()) }
  })
}

export default connect(null, mapDispatchToProps)(Boards)
