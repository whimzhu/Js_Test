import { legacy_createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

// 支持异步action方法
import { thunk } from "redux-thunk";

export default legacy_createStore(reducer, applyMiddleware(thunk));
