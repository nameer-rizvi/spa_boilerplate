const path = require("path");

module.exports = {
  entry: "../client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist")
  }
};
