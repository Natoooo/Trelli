import "whatwg-fetch"

class Api {
  constructor() {
    this.baseUrl = "http://localhost:5000"
    this.baseHeaders = {"Content-Type": "application/json"}
  }

  _headers() {
    return {...this.baseHeaders, 'X-Authenticate': this._getToken()}
  }

  _status(resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return Promise.resolve(resp)
    } else if(resp.status == 401 || resp.status == 403) {
      localStorage.removeItem('token')
      return Promise.reject(new AuthorizationError())
    } else {
      return Promise.reject(new Error(resp.statusText))
    }
  }

  _json(resp) {
    return resp.json()
  }

  authenticate(userName, password) {
    return fetch(this.baseUrl + "/login", {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        user: userName,
        password: password
      })
    })
    .then(this._status)
    .then(this._json)
    .then((data) => {
      this._setToken(data.token)
    })
  }

  logout() {
    return fetch(this.baseUrl + "/logout", {
      method: "DELETE",
      headers: this._headers()
    })
    .then(this._status)
    .then((data) => {
      this._removeToken(data.token)
    })
  }

  _setToken(token) {
    localStorage.setItem('token', token)
  }

  _getToken() {
    return localStorage.getItem('token')
  }

  isAuthenticated() {
    return (this._getToken() != undefined)
  }

  _removeToken() {
    localStorage.removeItem('token')
  }

  fetchBoards() {
    return fetch(this.baseUrl + "/boards", {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  fetchBoardById(boardId) {
    return fetch(this.baseUrl + "/boards/" + boardId , {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  createBoard(title, image) {
    return fetch(this.baseUrl + "/boards", {
      method: "POST",
      headers: this._headers(),
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
      headers: this._headers(),
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
      headers: this._headers()
    })
    .then(this._status)
    }

  fetchItems(boardId=null) {
    let url = this.baseUrl + "/items?"

    if (boardId != null) {
      url += "board_id=" + boardId + "&"
    }

    return fetch(url, {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  createItem(title, boardId) {
    return fetch(this.baseUrl + "/items", {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        title: title,
        board_id: boardId
      })
    })
    .then(this._status)
    .then(this._json)
  }

  updateItem(itemId, title) {
    return fetch(this.baseUrl + "/items/" + itemId, {
      method: "PUT",
      headers: this._headers(),
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
      headers: this._headers()
    })
    .then(this._status)
    }
}

export class AuthorizationError extends Error {}

export const db = new Api()
