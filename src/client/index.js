import "babel-polyfill";
import "./style.scss";

import { checkServiceWorker } from "./checkServiceWorker";

checkServiceWorker();

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack 4.";

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => console.log("Help! I've been Clicked!");

  element.appendChild(btn);
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
