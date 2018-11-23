import React, { Component } from "react"
import NavBar from "./NavBar"
import AddBoard from "./AddBoard"
import Boards from "./Boards"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container mt-4">
          <div className="container mb-4">
            <AddBoard />
          </div>
          <div className="container">
            <Boards />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
