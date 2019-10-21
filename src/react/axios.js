import axios from "axios";

import { port, endpoint, log } from "../shared/index";

export function get() {
  axios
    .get(encodeURI(api()))
    .then(res =>
      log({
        emoji: "📟",
        label: "[AXIOS/GET] [SUCCESS]",
        message: res.data.welcome
      })
    )
    .catch(err =>
      log({ emoji: "📟", label: "[AXIOS/GET] [ERROR]", message: err })
    );
}

function api() {
  const origin = window.location.origin;
  return origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}`
    : endpoint;
}
