import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCESS,
  GET_PRODUCT_SUCESS,
  PATCH_PRODUCT_SUCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
  products: [],
};
export let reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ADD_PRODUCT_SUCESS: {
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_PRODUCT_SUCESS: {
      return { ...state, isLoading: false, products: payload };
    }
    case PATCH_PRODUCT_SUCESS: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};
