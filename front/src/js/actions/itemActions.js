import { db } from "../api/api"

export const ITEMS_RECEIVED = "ITEMS_RECEIVED"
export const DELETE_ITEM = "DELETE_ITEM"
export const ADD_ITEM = "ADD_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"

export function itemsReceived(items) {
  return {
    type: ITEMS_RECEIVED,
    payload: {
      items
    }
  }
}

export function fetchItems() {
  return (dispatch) => {
    db.fetchItems()
    .then((items) => {
      console.log('GOT_ITEMS')
      dispatch(itemsReceived(items))
    })
    .catch((err) => {
      console.log(err, 'GOT_ERROR_ITEM')
    })
  }
}

export function itemRemoved(id) {
  return {
    type: DELETE_ITEM,
    payload: {
      id
    }
  }
}

export function deleteItem(itemId) {
  return (dispatch) => {
    db.deleteItem(itemId)
    .then((i) => {
      console.log("GOT_DELETE_ITEM")
      dispatch(itemRemoved(id))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_DELETE_ITEM")
    })
  }
}

export function addItem(id, title, boardId) {
  return {
    type: ADD_ITEM,
    payload: {
      id,
      title,
      boardId
    }
  }
}

export function createItem(title, image) {
  return (dispatch) => {
    db.createItem(title, image)
    .then((item) => {
      console.log('GOT_CREATE_ITEM')
      dispatch(addItem(item.id, item.title, item.board_id))
    })
    .catch((err) => {
      console.log(err, "GOT_ERROR_ADD_ITEM")
    })
  }
}

export function updatedItem(itemId, title) {
  return {
    type: UPDATE_ITEM,
    payload: {
      itemId,
      title
    }
  }
}

export function updateItem(itemId, title) {
  return (dispatch) => {
    db.updateItem(itemId, title)
    .then((item) => {
      console.log("GOT_UPDATE_ITEM")
      dispatch(updatedItem(item.id, item.title))
    })
    .catch(() => {
      console.log("GOT_ERROR_UPDATE_ITEM")
      dispatch(error("FAILED_TO_UPDATE_ITEM"))
    })
  }
}
