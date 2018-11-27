import { db } from "../api/api"
import { push } from "connected-react-router"

export function authenticate(userName, password) {
  return (dispatch) => {
    db.authenticate(userName, password)
    .then((i) => {
      console.log("GOT_LOGIN")
      dispatch(push('/'))
    })
    .catch((e) => {
      console.log(e, "GOT_ERROR_LOGIN")
    })
  }
}
