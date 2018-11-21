import React, { Component } from 'react'
import path from "../../styles/images/navbrand.jpg"

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="nav navbar-nav d-inline">
            <div className="d-inline pr-3"><a href="#" style={{fontSize: "16px", color: "white"}}>Home</a></div>
            <div className="d-inline"><a href="#" style={{fontSize: "16px", color: "white"}}>Boards</a></div>
          </div>

          <div className="nav navbar-nav">
            <a className="navbar-brand" href="#">
              <img alt="Brand" className="t-logo-nav" src= {path} />
            TRELLI</a>
          </div>

          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><button className="btn btn-light">Logout</button></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
