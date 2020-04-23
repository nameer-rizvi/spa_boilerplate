const isProd = process.env.NODE_ENV === "production";
const domain = require("./browser/index").props.url;
const _port = process.env.PORT || 5000;
const port = { server: _port, client: _port + 1 };
const origin = isProd ? domain : `http://localhost:${port.client}`;

module.exports = {
  isProd,
  port,
  origin,
  endpoint: "/api",
};
