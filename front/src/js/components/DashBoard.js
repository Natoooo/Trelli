import React, { Component } from "react"
import NavBar from "./NavBar"
import { connect } from "react-redux"
import { fetchBoardById } from "../actions/boardActions"

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
        <div className="container mt-4">
          PROUT
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchBoardById: (id) => { dispatch(fetchBoardById(id)) }
  })
}

export default connect(null, mapDispatchToProps)(DashBoard)
