const express = require("express");

const app_config = require("../config/index");
const isProd = app_config["isProd"];
const path = app_config["path"];

function webpackDev() {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const wp_config = require("../config/webpack/dev.js");
  const compiler = webpack(wp_config);
  return webpackDevMiddleware(compiler, app_config["webpack"]);
}

module.exports = isProd ? express.static(path.toDist()) : webpackDev();
