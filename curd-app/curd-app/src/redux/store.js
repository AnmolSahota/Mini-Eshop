import { legacy_createStore, combineReducers } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { applyMiddleware } from "redux";
import { reducer as productReducer } from "./product/reducer";
import thunk from "redux-thunk";
let rootReducer = combineReducers({
  authReducer,
  productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
