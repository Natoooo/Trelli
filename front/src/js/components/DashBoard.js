import React, { Component } from "react"
import NavBar from "./NavBar"
import ColumnsTask from "./ColumnsTask"
import UpdateBoard from "./UpdateBoard"
import TestDrag from "./TestDrag"
import { connect } from "react-redux"
import { fetchBoardById } from "../actions/boardActions"
import "../../styles/dashboard.css"

class DashBoard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBoardById(this.props.id)
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
            <div className="row pt-3 ml-4">
              <div className="d-inline">
                <h1 className="t-dashboard-title pl-4 pr-4">{this.props.boards.title}</h1>
              </div>
              <UpdateBoard id={this.props.id}/>
            </div>
            <ColumnsTask id={this.props.id}/>
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
    fetchBoardById: (id) => { dispatch(fetchBoardById(id)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
