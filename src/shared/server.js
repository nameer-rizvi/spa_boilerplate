const _port = process.env.PORT || 5000;
const port = { server: _port, client: _port + 1 };
const isProd = process.env.NODE_ENV === "production";
const domain = require("./browser").props.url;

module.exports = {
  port,
  isProd,
  origin: isProd ? domain : "http://localhost:" + port.client,
  endpoint: "/api",
};
