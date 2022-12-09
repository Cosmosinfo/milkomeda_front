import { combineReducers } from "redux";
import user from "./userReducer";
import streamReducer from "./streamReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  user,
  streams: streamReducer,
  token: authReducer,
});

export default rootReducer;
