import React, { Component } from "react"
import{ connect } from "react-redux"
import { fetchItems, createItem } from "../actions/itemActions"

class ColumnsTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ""
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.addCard = this.addCard.bind(this)
  }

  componentDidMount() {
    this.props.fetchItems(this.props.id)
  }

  handleChangeTitle() {
    setState({
      title: e.target.value
    })
  }

  addCard() {
    this.props.createItem(this.state.title, this.props.id)
  }

  render() {
    const items = this.props.items.map((item, key) => {
      return (
        <div className="t-dashboard-item" key={key}>
          <li  draggable="true" className="list-group-item m-2">
            {item.title}
          </li>
        </div>
      )
    })
    return (
      <div className="row ml-2">
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-1">To Do</div>
            <ul className="list-group">{items}</ul>
            <p onClick={this.addCard}>+ add a card</p>
        </div>
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-1">In Progress</div>
            <ul className="list-group">{items[0]}</ul>
            <p onClick={this.addCard}>+ add a card</p>
        </div>
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-1">Done</div>
            <ul className="list-group">{items[1]}</ul>
            <p onClick={this.addCard}>+ add a card</p>
        </div>
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-1">+Add A List</div>
        </div>
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-1">+Add A List</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return({
    fetchItems: (boardId) => { dispatch(fetchItems(boardId)) },
    createItem: (title, boardId) => { dispatch(createItem(title, boardId)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsTask)
