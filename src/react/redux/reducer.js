import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export default (history, shared) =>
  combineReducers({
    router: connectRouter(history),
    shared: shared
  });
