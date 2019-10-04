const merge = require("webpack-merge");

const common = require("./common.js");
const config = require("../index");
const toDist = config["path"].toDist;
const port = config["port"];

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    contentBase: toDist(),
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: port + 1,
    ...config["webpack"]
  }
});
