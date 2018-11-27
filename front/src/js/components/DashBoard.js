import React, { Component } from "react"
import NavBar from "./NavBar"
import ColumnsTask from "./ColumnsTask"
import { connect } from "react-redux"
import { fetchBoardById, updateBoard } from "../actions/boardActions"
import "../../styles/dashboard.css"

class DashBoard extends Component {
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

  componentDidMount() {
    this.props.fetchBoardById(this.props.id)
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

  updateBoard(e) {
    this.props.updateBoard(this.props.id, this.state.title, this.state.image)

    this.setState({
      title: "",
      image:""
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="mw-100">
          <div className="position-relative">
            { this.props.boards.image !== "" ?
              <img src={this.props.boards.image} className="t-dashboard-background img-fluid"/>
              :
              <div className="t-dashboard-background img-fluid"/>
            }
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 pt-4 text-center">
                <h2 className="t-dashboard-title">{this.props.boards.title}</h2>
              </div>
            </div>

            <div className="row">
              <div className="t-dashboard-inputs col-12 input-group input-group-lg">
                <input type="text" placeholder="Enter a new title..." value={this.state.title} onChange={this.handleChangeTitle}/>
                <input type="text" placeholder="Change background..." value={this.state.image} onChange={this.handleChangeImage}/>
                <button className="btn btn-dark" onClick={this.updateBoard}>Save Changes</button>
              </div>
            </div>
            <ColumnsTask />
          </div>
        </div>
      </React.Fragment>
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
    fetchBoardById: (id) => { dispatch(fetchBoardById(id)) },
    updateBoard: (boardId, title, image) => { dispatch(updateBoard(boardId, title, image)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
