import { SIGNOUT, LOGIN } from '../constants/ActionTypes'

export const logOut = () => (dispatch) => {
    localStorage.setItem("token", false)
    dispatch({ type: SIGNOUT });
}

export const UserLogin = () => (dispatch) => {
    localStorage.setItem("token", true)
    dispatch({ type: LOGIN });
}