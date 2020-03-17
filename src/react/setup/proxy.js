import axios from "axios";
import { port, endpoint } from "../../shared/index";

const origin = window.location.origin;

const url = origin.includes(`:${port.client}`)
  ? `${origin.replace(port.client, port.server)}${endpoint}`
  : `${origin}${endpoint}`;

export default (axios.defaults.baseURL = url);
