import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST } from "./actionType";

export let login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login", userData)
    .then((res) => {
      dispatch({ type: "LOGIN_SUCESS", payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

