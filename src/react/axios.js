import axios from "axios";

export function get() {
  axios
    .get(encodeURI(api()))
    .then(res => console.log("[GET/SUCCESS]", res.data))
    .catch(err => console.log("[GET/ERROR]", err));
}

function api() {
  const origin = window.location.origin;
  const shared = require("../shared/index");
  const port = shared["port"];
  const endpoint = shared["endpoint"];
  return origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}`
    : endpoint;
}
