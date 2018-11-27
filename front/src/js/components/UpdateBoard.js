import React, { Component } from "react"
import { connect } from "react-redux"
import { updateBoard } from "../actions/boardActions"

class UpdateBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      image: ""
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.updateBoard =this.updateBoard.bind(this)
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }

  updateBoard() {
    this.props.updateBoard(this.props.id, this.state.title, this.state.image)

    this.setState({
      title: "",
      image:""
    })
  }


  render() {
    return (
      <React.Fragment>
        <div className="pl-1 d-inline">
          <button data-toggle="modal" data-target="#exampleModal" className="btn btn-dark btn-lg ">+</button>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update your Board</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <input className="form-control border-0 mb-2" type="text" placeholder="Enter the new board's title..." value={this.state.title} onChange={this.handleChangeTitle}/>
                <input className="form-control border-0" type="text" placeholder="Enter your url to add a new background..." type="url" value={this.state.image} onChange={this.handleChangeImage}/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.updateBoard} data-dismiss="modal" aria-label="Close">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    updateBoard: (boardId, title, image) => { dispatch(updateBoard(boardId, title, image)) }
  })
}

export default connect(null, mapDispatchToProps)(UpdateBoard)
