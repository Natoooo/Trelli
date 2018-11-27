import { db } from "../api/api"

export const BOARDS_RECEIVED = "BOARDS_RECEIVED"
export const DELETE_BOARD = "DELETE_BOARD"
export const ADD_BOARD = "ADD_BOARD"
export const UPDATE_BOARD = "UPDATE_BOARD"

export function boardsReceived(boards) {
  return {
    type: BOARDS_RECEIVED,
    payload: {
      boards
    }
  }
}

export function fetchBoards() {
  return (dispatch) => {
    db.fetchBoards()
    .then((boards) => {
      console.log("GOT_BOARDS")
      dispatch(boardsReceived(boards))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_BOARDS")
    })
  }
}

export function fetchBoardById(boardId) {
  return (dispatch) => {
    db.fetchBoardById(boardId)
    .then((boards) => {
      console.log("GOT_BOARD_BY_ID")
      dispatch(boardsReceived(boards))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_BOARD_BY_ID")
    })
  }
}

export function boardRemoved(id) {
  return {
    type: DELETE_BOARD,
    payload: {
      id
    }
  }
}

export function deleteBoard(boardId) {
  return (dispatch) => {
    db.deleteBoard(boardId)
    .then((b) => {
      console.log("GOT_DELETE_BOARD")
      dispatch(boardRemoved(boardId))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_DELETE_BOARD")
    })
  }
}

export function addBoard(id, title, image) {
  return {
    type: ADD_BOARD,
    payload: {
      id,
      title,
      image
    }
  }
}

export function createBoard(title, image) {
  return (dispatch) => {
    db.createBoard(title, image)
    .then((board) => {
      console.log("GOT_CREATE_BOARD")
      dispatch(addBoard(board.id, board.title, board.image))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_CREATE_BOARD")
    })
  }
}

export function updatedBoard(id, title, image) {
  return {
    type: UPDATE_BOARD,
    payload: {
      id,
      title,
      image
    }
  }
}

export function updateBoard(boardId, title, image) {
  return (dispatch) => {
    db.updateBoard(boardId, title, image)
    .then((b) => {
      console.log("GOT_UPDATE_BOARD")
      dispatch(updatedBoard(b.id, b.title, b.image))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_UPDATE_BOARD")
    })
  }
}
