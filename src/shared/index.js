const browser = require("./browser");
const path = require("./path");
const server = require("./server");
const settings = require("./settings");

module.exports = {
  browser,
  path,
  ...server,
  settings,
};
