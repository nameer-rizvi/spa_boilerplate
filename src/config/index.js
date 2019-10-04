// RULE: "ANYTHING" REQUIRED IN MORE THAN ONE FILE,
// AND/OR IS A CONSTANT CONFIGUARATION SETTING GOES HERE.

const path = require("./path");

module.exports = {
  isProd: process.env.NODE_ENV === "production",
  port: 5000,
  path: path,
  webpack: {
    stats: "minimal"
  },
  client: {
    name: "[app name]"
  }
};
