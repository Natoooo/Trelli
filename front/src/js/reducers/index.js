import { combineReducers } from "redux"
import { boardReducer } from "./boardReducer"
import { itemReducer } from "./itemReducer"

const allReducers = combineReducers({
  boards: boardReducer,
  items: itemReducer
})

export default allReducers
