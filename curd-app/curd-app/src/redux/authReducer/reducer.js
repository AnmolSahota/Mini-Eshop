import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType";

let initialStage = {
  isLoading: false,
  isError: false,
  auth: false,
  token: "",
};

export let reducer = (state = initialStage, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCESS: {
      return { ...state, isLoading: false, token: payload, auth: true };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    default:
      return state;
  }
};
