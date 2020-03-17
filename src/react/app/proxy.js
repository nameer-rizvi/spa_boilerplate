import { port, endpoint } from "../../shared/index";

import axios from "axios";
import logti from "logti";

function proxy(ext) {
  const origin = window.location.origin;
  const url = origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}${ext || ""}`
    : `${origin}${endpoint}${ext || ""}`;
  return encodeURI(url);
}

export default () =>
  axios
    .get(encodeURI(proxy()))
    .then(res => logti(`📟 ${res.data.welcome}`))
    .catch(err => logti(err));
