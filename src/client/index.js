function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Hello webpack 2.";

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => console.log("Help! I've been Clicked!");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
