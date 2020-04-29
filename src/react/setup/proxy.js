import axios from "axios";
import { port, endpoint } from "../../shared/index";

const { origin } = window.location;

axios.defaults.baseURL = origin.includes(`:${port.client}`)
  ? origin.replace(port.client, port.server) + endpoint
  : origin + endpoint;
