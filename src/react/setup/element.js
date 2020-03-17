const id = "root";

export default {
  create: () => {
    const element = document.createElement("div");
    element.id = id;
    document.body.appendChild(element);
  },
  get: () => document.getElementById(id)
};
