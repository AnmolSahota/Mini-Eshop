import axios from "axios";
import {
  ADD_PRODUCT_SUCESS,
  GET_PRODUCT_SUCESS,
  PATCH_PRODUCT_SUCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionType";

export let addProduct = (userData) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post(`http://localhost:8080/products`, userData)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export let getData = (obj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get("http://localhost:8080/products", {
      params: obj,
    })
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCESS, payload: res.data });
    })
    .catch((res) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

export let editProduct = (obj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  return axios
    .patch(`http://localhost:8080/products/${id}`, obj)
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCESS });
    })
    .catch(() => dispatch({ type: PRODUCT_FAILURE }));
};
