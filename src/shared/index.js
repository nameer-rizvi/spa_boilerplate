const port = process.env.PORT || 5000;
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
  description: "Express server serving a react client via webpack middleware.",
  author: "Nameer Rizvi",
  // Colors should be consistent with styling in the react app.
  themeColor: "#ffffff",
  backgroundColor: "#20232a",
  eslint: { rules: { "react/prop-types": 0, "react/display-name": 0 } },
  log,
  path
};
