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
          <div className="container mb-4">
            <Menu />
          </div>
          <div className="container">
            <Board />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
