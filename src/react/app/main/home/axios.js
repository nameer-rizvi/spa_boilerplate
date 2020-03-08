import axios from "axios";
import proxy from "../../proxy";
import logti from "logti";

export function get() {
  axios
    .get(encodeURI(proxy()))
    .then(res => logti(`📟 ${res.data.welcome}`))
    .catch(err => logti(err));
}
