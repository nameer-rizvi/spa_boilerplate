import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

// import { checkServiceWorker } from "./checkServiceWorker";

// checkServiceWorker();

const id = "root";

const element = document.createElement("div");

element.id = id;

document.body.appendChild(element);

ReactDOM.render(<App />, document.getElementById(id));
// ReactDOM.hydrate(<App />, document.getElementById(id));
