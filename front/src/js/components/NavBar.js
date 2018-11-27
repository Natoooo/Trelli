import React, { Component } from "react"
import { connect } from "react-redux"
import { logout } from "../actions/logoutActions"
import path from "../../styles/images/navbrand.jpg"

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="nav navbar-nav d-inline">
            <a className="d-inline navbar-brand pr-3" href="#">
              <img alt="Brand" className="t-logo-nav" src= {path} />
            TRELLI</a>
            <div className="d-inline pr-3"><a href="#" style={{fontSize: "16px", color: "white"}}>Home</a></div>
            <div className="d-inline"><a href="#" style={{fontSize: "16px", color: "white"}}>Boards</a></div>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><button className="btn btn-light" onClick={this.onSubmit}>Logout</button></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { dispatch(logout()) }
  }
}

export default connect(null, mapDispatchToProps)(NavBar)
