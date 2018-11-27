import { BOARDS_RECEIVED, ADD_BOARD, DELETE_BOARD, UPDATE_BOARD } from "../actions/boardActions"

export function boardReducer(state = [], action) {
  switch(action.type) {
    case BOARDS_RECEIVED:
      return action.payload.boards

    case ADD_BOARD:
      return [...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image
        }
      ]
    case DELETE_BOARD:
      return state.filter((board) => {
        return board.id !== action.payload.id
      })

    case UPDATE_BOARD:
      return state.map((board) => {
        if(board.id === action.payload.id) {
          board.title = action.payload.title
          board.image = action.payload.image
        }
        return board
      })

    default:
      return state
  }
}
