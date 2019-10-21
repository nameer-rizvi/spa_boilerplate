// RULE: "ANYTHING" REQUIRED IN MORE THAN ONE FILE,
// AND/OR IS A CONSTANT CONFIGUARATION SETTING GOES HERE.

const port = process.env.PORT || 5000;
const path = require("./path");
const log = require("./log");

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: {
    server: port,
    client: port + 1
  },
  path: path,
  log: log,
  endpoint: "/api",
  name: "[app name]"
};
