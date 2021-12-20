import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
// import persistState from 'redux-localstorage';
// import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";
import { Dictionary } from "./common/resources/lang/object/Dictionary";
import { ActionType } from "./common/resources/redux/types";

// logger
// const loggerMiddleware = createLogger({});
// middleware
const middleware = applyMiddleware(promise(), thunk, 
// loggerMiddleware
);
// const middleware = applyMiddleware(promise(), thunk);
// enhancer
const enhancer = compose(
  middleware
  // persistState()
);

export default createStore<
  Dictionary | undefined,
  ActionType,
  StoreEnhancer,
  unknown
>(reducer, enhancer);
