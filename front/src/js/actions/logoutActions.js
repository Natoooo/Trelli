import { db } from "../api/api"
import { push } from "connected-react-router"

export function logout() {
  return (dispatch) => {
    db.logout()
    .then((i) => {
      console.log("GOT_LOGOUT")
    })
    .catch(() => {
      console.log("GOT_ERROR_LOGOUT")
    })
    .finally(() => {
      dispatch(push("/login"))
    })
  }
}
