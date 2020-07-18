import { browser } from "../../shared";

const id = "root";

const create = () => {
  const element = document.createElement("div");
  element.id = id;
  element.style.fontFamily = browser.props.fontFamily;
  document.body.appendChild(element);
};

const get = () => document.getElementById(id);

export default { create, get };
