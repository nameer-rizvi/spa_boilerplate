import { element, store, serviceWorker } from "./setup";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

element.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element.get()
);

serviceWorker.register();
