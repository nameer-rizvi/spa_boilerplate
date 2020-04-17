const _port = process.env.PORT || 5000;

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: { server: _port, client: _port + 1 },
  endpoint: "/api",
};

// const domain = require("./constants/index").app.href.domain;
// origin: isProd ? domain : `http://localhost:${port.client}`,
