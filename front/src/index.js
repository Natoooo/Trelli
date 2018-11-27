import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./styles/app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery/dist/jquery.js"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './js/components/App'
import DashBoard from "./js/components/DashBoard"
import { Provider } from "react-redux"
import { store, history } from "./js/store/index"
import { Route, Switch, Redirect } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import { db } from "./js/api/api"
import Login from "./js/components/Login"


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

class PrivateRoute extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
    return (
      db.isAuthenticated() ? (<Route path={this.props.path} render={ args => this.props.render(args) } />) : (<Redirect to="/login"/>)
    )
  }
}


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/login" render={ () => ( <Login /> ) } />
          <PrivateRoute path="/dashBoard/:id" render={ ({ match }) => ( <DashBoard id={match.params.id} /> ) } />
          <PrivateRoute path="/" render={ () => ( <App /> ) } />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById("root")
)
