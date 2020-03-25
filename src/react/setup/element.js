import { browser } from "../../shared/index";

const id = "root";

export default {
  create: () => {
    const element = document.createElement("div");
    element.id = id;
    element.style.cssText = browser.props.style;
    document.body.appendChild(element);
  },
  get: () => document.getElementById(id)
};
