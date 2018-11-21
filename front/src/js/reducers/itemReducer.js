import { ITEMS_RECEIVED, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actions/itemActions"

export function itemReducer(state = [], action) {
  switch (action.type) {
    case ITEMS_RECEIVED:
      return action.payload.items

    case ADD_ITEM:
      return [...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          boardId: action.payload.boardId
        }
      ]

    case DELETE_ITEM:
      return state.filter((item) => {
        return item.id !== action.payload.id
      })

    case UPDATE_ITEM:
      return state.map((item) => {
        if(item.id === action.payload.itemId) {
          item.title = action.payload.title
        }
        return item
      })

    default:
      return state
  }
}
