import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import createRootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const middleware2 = applyMiddleware(middleware, thunk, promise);

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(middleware2)
);
