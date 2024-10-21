import { combineReducers } from "redux";
import countReducer from "./count";
import personReducer from "./person";

// 合并reducer
export default combineReducers({
  count: countReducer,
  persons: personReducer,
});
