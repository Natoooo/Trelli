import React, { Component } from "react"
import { connect } from "react-redux"
import pathTime from "../../styles/images/time.png"
import pathPersonal from "../../styles/images/personal.jpg"
import { fetchBoards, createBoard, updateBoard, deleteBoard } from "../actions/boardActions"

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      date: new Date()
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("READ_BOARDS", this.props.fetchBoards)
    this.props.fetchBoards()
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClick() {
    const board = {
      title: this.state.title,
      date: this.state.date.toLocaleDateString()
    }

    this.props.createBoards(board, null)

    this.setState({
      title: ""
    })
  }

  render() {
    let renderBoards = this.props.boards.map((board, key) => {
      return (
        <div className="container bg-dark text-light" key={key}>
          <h2>{board.title}</h2>
          <p>{this.state.date.toLocaleDateString()}</p>
        </div>
      )})

    return (
      <div className="container mw-100">
        <div className="row">
          <p>
            <img alt="logo-time" className="t-logo-time mr-3" src={pathTime} />Recently Viewed
          </p>
          <div className="bg-dark"></div>
        </div>
        <div className="row">
          <p>
          <img alt="logo-personal" className="t-logo-personal mr-3" src={pathPersonal} />Personal Boards
          </p>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form>
                <div className="form-group">
                  <input
                    onChange={this.handleChange}
                    value={this.state.title}
                    type="text"
                    name="title"
                    className="form-control no-border"
                    placeholder="Title..."
                    required>
                  </input>
                </div>

                <div className="form-group">
                  <button onClick={this.handleClick} className="btn btn-primary">+ Create Boards</button>
                </div>
              </form>

              {renderBoards}
            </div>
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
    createBoard: (title, image) => { dispatch(createBoard(title, image)) },
    updateBoard: (boardId, title, image) => { dispatch(updateBoard(boardId, title, image)) },
    deleteBoard: (boardId) => { dispatch(deleteBoard(boardId)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
