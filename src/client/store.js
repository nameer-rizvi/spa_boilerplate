import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

import createRootReducer from "./reducer";

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const middleware2 = applyMiddleware(middleware, thunk, promise);

const config = () => {
  return require("../config/index")["client"];
};

export const store = createStore(
  createRootReducer(history, config),
  composeWithDevTools(middleware2)
);
