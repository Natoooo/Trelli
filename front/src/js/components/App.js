import React, { Component } from "react"
import NavBar from "./NavBar"
import Menu from "./Menu"
import Board from "./Board"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mt-4">
          <div className="row">
            <div className="container col-3">
              <Menu />
            </div>
            <div className="container col-9">
              <Board />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
