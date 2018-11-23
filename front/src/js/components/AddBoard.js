import React, { Component } from "react"
import { connect } from "react-redux"
import { createBoard} from "../actions/boardActions"

class AddBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      image:""
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
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

  handleCreate() {
    this.props.createBoard(this.state.title, this.state.image)

    this.setState({
      title: "",
      image: ""
    })
  }

  render() {
    return (
      <div className="container mw-100">
        <div className="container text-center">
          <button data-toggle="modal" data-target="#exampleModal" className="btn btn-primary">+ Add a Board</button>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a Board</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <input className="form-control border-0 mb-2" type="text" placeholder="Enter the Board's Title..." value={this.state.title} onChange={this.handleChangeTitle}/>
                <input className="form-control border-0" type="text" placeholder="Enter your url to add a background..." type="url" value={this.state.image} onChange={this.handleChangeImage}/>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleCreate} data-dismiss="modal" aria-label="Close">Save changes</button>
              </div>
            </div>
          </div>
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

export default connect(null, mapDispatchToProps)(AddBoard)
