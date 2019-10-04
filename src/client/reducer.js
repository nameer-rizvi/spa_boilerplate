import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export default (history, config) =>
  combineReducers({
    router: connectRouter(history),
    config: config
  });
