import { combineReducers } from "redux";
import user from "./userReducer";
import streamReducer from "./streamReducer";

const rootReducer = combineReducers({
  user,
  streams: streamReducer,
});

export default rootReducer;
