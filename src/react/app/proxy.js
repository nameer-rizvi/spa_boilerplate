import { port, endpoint } from "../../shared/index";

export default ext => {
  const origin = window.location.origin;
  return origin.includes(`:${port.client}`)
    ? `${origin.replace(port.client, port.server)}${endpoint}${ext || ""}`
    : endpoint;
};
