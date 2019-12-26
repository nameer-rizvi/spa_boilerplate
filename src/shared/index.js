const port = process.env.PORT || 5000;
const eslint = require("./eslint");
const log = require("./log");
const path = require("./path");

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: {
    server: port,
    client: port + 1
  },
  endpoint: "/api",
  name: "[app name]",
  eslint,
  log,
  path
};
