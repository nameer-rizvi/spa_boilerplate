import "react-app-polyfill/ie9";
import React from "react";
import Element from "./setup/element";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./setup/store";
import App from "./app/index";
import * as serviceWorker from "./setup/serviceWorker";

Element.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  Element.get()
);

serviceWorker.register();
