// RULE: "ANYTHING" REQUIRED IN MORE THAN ONE FILE,
// AND/OR IS A CONSTANT CONFIGUARATION SETTING GOES HERE.

const path = require("./path");
const port = process.env.PORT || 5000;

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: {
    server: port,
    client: port + 1
  },
  path: path,
  client: {
    name: "[app name]"
  }
};
