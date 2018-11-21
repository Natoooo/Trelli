import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div className="container mw-100">
        <div className="container text-center">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">Boards</li>
            <li className="list-group-item list-group-item-action">Home</li>
            <li className="list-group-item list-group-item-action">+ Create a new Board</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
