import React from "react"
import ReactDOM from "react-dom"
import "./styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './js/components/App'
import DashBoard from "./js/components/DashBoard"
import { Provider } from "react-redux"
import { store, history } from "./js/store/index"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/dashBoard/:id" render={ ({ match }) => ( <DashBoard id={match.params.id} /> ) } />
          <Route path="/" render={ () => ( <App /> ) } />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById("root")
)
