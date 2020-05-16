const isProd = process.env.NODE_ENV === "production";
const domain = require("./browser").props.url;
const _port = process.env.PORT || 5000;
const port = { server: _port, client: _port + 1 };

module.exports = {
  isProd,
  port,
  origin: isProd ? domain : `http://localhost:${port.client}`,
  endpoint: "/api",
};
