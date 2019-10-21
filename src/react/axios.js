import axios from "axios";

import { port, endpoint } from "../shared/index";

export function get() {
  axios
    .get(encodeURI(api()))
    .then(res =>
      console.log(`\n📟 [AXIOS/GET] [SUCCESS]\n\n${res.data.welcome}\n\n`)
    )
    .catch(err => console.log(`\n📟 [AXIOS/GET] [ERROR]\n\n${err}\n\n`));
}

function api() {
  const origin = window.location.origin;
  return origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}`
    : endpoint;
}
