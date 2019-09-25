import Icon from "./webpack.png";
import Data from "./data.xml";

import "./style.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello webpack.";
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
