import axios from "axios";

const port = require("../config/index")["port"];

export function get() {
  axios
    .get(encodeURI(api()))
    .then(res => console.log("[GET/SUCCESS]", res.data))
    .catch(err => console.log("[GET/ERROR]", err));
}

function api() {
  const origin = window.location.origin;
  const endpoint = "/api";
  return origin.includes(port.client)
    ? `${origin.replace(port.client, port.server)}${endpoint}`
    : endpoint;
}
