const express = require("express");
const router = express.Router();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const config = require("../../config/webpack.config.js");
const compiler = webpack(config);

router.use(
  webpackDevMiddleware(compiler, {
    publicPath: "/"
  })
);

module.exports = router;
