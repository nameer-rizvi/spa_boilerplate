import { browser } from "../../shared";

const id = "root";

const element = {
  create: () => {
    const element = document.createElement("div");
    element.id = id;
    element.style.cssText = browser.props.style;
    document.body.appendChild(element);
  },
  get: () => document.getElementById(id),
};

export default element;
