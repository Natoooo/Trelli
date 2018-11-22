import React from "react"
import ReactDOM from "react-dom"
import "./styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './js/components/App'
import { Provider } from "react-redux"
import { store } from "./js/store/index"

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
