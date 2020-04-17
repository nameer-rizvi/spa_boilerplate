const server = require("./server");
const browser = require("./browser/index");
const settings = require("./settings");
const path = require("./path");

module.exports = {
  ...server,
  browser,
  settings,
  path,
};
