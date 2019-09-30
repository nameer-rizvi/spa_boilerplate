const env = process.env.NODE_ENV;
const express = require("express");
const path = require("../config/index")["path"];
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../config/webpack/dev.js");
const compiler = webpack(config);

module.exports =
  env === "production"
    ? express.static(path.toDist())
    : webpackDevMiddleware(compiler, { publicPath: "/" });
