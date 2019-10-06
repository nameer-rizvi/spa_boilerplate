import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import App from "./components/app";

import * as serviceWorker from "./serviceWorker";

const id = "root";
const element = document.createElement("div");

element.id = id;

document.body.appendChild(element);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(id)
);

serviceWorker.register();
