import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import allReducers from "../reducers/index"
import thunk from "redux-thunk"

export const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    composeWithDevTools()
  )
)
