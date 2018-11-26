import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { createHashHistory } from "history"
import { routerMiddleware } from "connected-react-router"
import createRootReducer from "../reducers/index"

export const history = createHashHistory()

export const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    composeWithDevTools()
  )
)
