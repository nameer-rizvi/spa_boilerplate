import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import * as serviceWorker from "./serviceWorker";

const id = "root";
const element = document.createElement("div");

element.id = id;

document.body.appendChild(element);

ReactDOM.hydrate(<App />, document.getElementById(id));

serviceWorker.register();
