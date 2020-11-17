const isProduction = process.env.NODE_ENV === "production";
const _port = process.env.PORT || 5000;
const port = { server: _port, client: _port + 1 };
const domain = require("./browser").props.url;

module.exports = {
  isProduction,
  port,
  origin: isProduction ? domain : "http://localhost:" + port.client,
  endpoint: "/api",
};
