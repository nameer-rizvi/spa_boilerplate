import "babel-polyfill";

import React from "react";
import { hydrate } from "react-dom";

import App from "./app";

import { checkServiceWorker } from "./checkServiceWorker";

checkServiceWorker();

const element = document.createElement("div");
element.id = "root";
element.innerHTML = "id should be root";

document.body.appendChild(element);

hydrate(<App />, document.getElementById("root"));
