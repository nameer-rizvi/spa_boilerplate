const config = require("../config/index");
const isProd = config["isProd"];
const path = config["path"];

const fs = require("fs");
const htmlExists = fs.existsSync(path.toHtml());

const express = require("express");

const message = [
  "Server can't --get-- through browser's window (via url) because the app is using the historyApiFallback module.",
  "This is a feature required for developing an spa (single-page application).",
  "For more information, you can checkout the module's:",
  "- github readme: https://github.com/bripkens/connect-history-api-fallback/blob/master/README.md",
  "- npm page: https://www.npmjs.com/package/connect-history-api-fallback"
];

module.exports = (req, res) =>
  isProd && htmlExists
    ? express.static(path.toDist())
    : res.status(200).send(message);
