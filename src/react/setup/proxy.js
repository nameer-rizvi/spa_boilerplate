import { port, endpoint } from "../../shared/index";

export default ext => {
  const origin = window.location.origin;
  const url = origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}${ext || ""}`
    : `${origin}${endpoint}${ext || ""}`;
  return encodeURI(url);
};
