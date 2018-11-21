import React, { Component } from "react"
import { connect } from "react-redux"
import { createBoard} from "../actions/boardActions"

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClick() {
    const board = {
      title: this.state.title
    }

    this.props.createBoard(board, null)

    this.setState({
      title: ""
    })
  }

  render() {
  //   <div className="container-fluid">
  // <div className="row">
  //   <div className="col-sm-6 col-sm-offset-3">
  //     <form>
  //       <div className="form-group">
  //         <input
  //           onChange={this.handleChange}
  //           value={this.state.title}
  //           type="text"
  //           name="title"
  //           className="form-control no-border"
  //           placeholder="Title..."
  //           required>
  //         </input>
  //       </div>
  //
  //       <div className="form-group">
  //         <button onClick={this.handleClick} className="btn btn-primary">+ Create Boards</button>
  //       </div>
  //     </form>

    return (
      <div className="container mw-100">
        <div className="container text-center">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">Boards</li>
            <li onClick={this.handleClick} className="list-group-item list-group-item-action">+ Create a new Board</li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    createBoard: (title, image) => { dispatch(createBoard(title, image)) }
  })
}

export default connect(null, mapDispatchToProps)(Menu)
