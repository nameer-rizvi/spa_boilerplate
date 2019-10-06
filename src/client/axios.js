import axios from "axios";

const port = require("../config/index")["port"];

export function get() {
  axios
    .get(encodeURI(api()))
    .then(res => console.log("[GET/SUCCESS]", res.data))
    .catch(err => console.log("[GET/ERROR]", err));
}

function api() {
  const host = window.location.host;
  return host.includes(port.client)
    ? `http://localhost:${port.server}/api`
    : "/api";
}
