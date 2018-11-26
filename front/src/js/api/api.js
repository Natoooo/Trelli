import "whatwg-fetch"

class Api {
  constructor() {
    this.baseUrl = "http://localhost:5000"
    this.baseHeaders = {"Content-Type": "application/json"}
  }

  _status(resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return Promise.resolve(resp)
    } else {
      return Promise.reject(new Error(resp.statusText))
    }
  }

  _json(resp) {
    return resp.json()
  }

  fetchBoards() {
    return fetch(this.baseUrl + "/boards", {
      method: "GET",
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }

  fetchBoardById(boardId) {
    return fetch(this.baseUrl + "/boards/" + boardId , {
      method: "GET",
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }

  createBoard(title, image) {
    return fetch(this.baseUrl + "/boards", {
      method: "POST",
      headers: this.baseHeaders,
      body: JSON.stringify({
        title: title,
        image: image
      })
    })
    .then(this._status)
    .then(this._json)
  }

  updateBoard(boardId, title, image) {
    return fetch(this.baseUrl + "/boards/" + boardId, {
      method: "PUT",
      headers: this.baseHeaders,
      body: JSON.stringify({
        title: title,
        image: image
      })
    })
    .then(this._status)
    .then(this._json)
  }

  deleteBoard(boardId) {
    return fetch(this.baseUrl + "/boards/" + boardId, {
      method: "DELETE",
      headers: this.baseHeaders
    })
    .then(this._status)
    }

  fetchItems() {
    return fetch(this.baseUrl + "/items", {
      method: "GET",
      headers: this.baseHeaders
    })
    .then(this._status)
    .then(this._json)
  }

  createItem(title, image) {
    return fetch(this.baseUrl + "/items", {
      method: "POST",
      headers: this.baseHeaders,
      body: JSON.stringify({
        title: title,
        image: image
      })
    })
    .then(this._status)
    .then(this._json)
  }

  updateItem(itemId, title) {
    return fetch(this.baseUrl + "/items/" + itemId, {
      method: "PUT",
      headers: this.baseHeaders,
      body: JSON.stringify({
        title: title
      })
    })
    .then(this._status)
    .then(this._json)
  }

  deleteItem(itemId) {
    return fetch(this.baseUrl + "/items/" + itemId, {
      method: "DELETE",
      headers: this.baseHeaders
    })
    .then(this._status)
    }
}

export const db = new Api()
