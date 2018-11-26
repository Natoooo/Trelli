import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import { boardReducer } from "./boardReducer"
import { itemReducer } from "./itemReducer"

export default (history) => combineReducers({
  router: connectRouter(history),
  boards: boardReducer,
  items: itemReducer
})
