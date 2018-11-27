import React, { Component } from "react"
import{ connect } from "react-redux"
import { fetchItems } from "../actions/itemActions"

class ColumnsTask extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    const items = this.props.items.map((item, key) => {
      return <div className="t-dashboard-item" key={key}><li className="list-group-item m-2">{item.title}</li> </div>
    })
    return (
      <div className="row">
        <div className="col-2 t-dashboard-columns p-0">
          <div className="font-weight-bold p-2">To Do</div>
            <ul className="list-group">{items}</ul>
        </div>
        <div className="col-2 t-dashboard-columns font-weight-bold p-2">In Progress</div>
        <div className="col-2 t-dashboard-columns font-weight-bold p-2">Done</div>
        <div className="col-2 t-dashboard-columns font-weight-bold p-2">+Add A List</div>
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
    fetchItems: () => { dispatch(fetchItems()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsTask)
