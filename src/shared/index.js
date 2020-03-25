const port = process.env.PORT || 5000;
const browser = require("./browser/index");
const settings = require("./settings");
const path = require("./path");

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: { server: port, client: port + 1 },
  endpoint: "/api",
  browser,
  settings,
  path
};
