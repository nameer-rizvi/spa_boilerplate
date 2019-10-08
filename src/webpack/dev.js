const merge = require("webpack-merge");

const common = require("./common.js");
const shared = require("../shared/index");
const toDist = shared["path"]["toDist"];
const port = shared["port"]["client"];

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    contentBase: toDist(),
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: port,
    stats: "minimal"
  }
});
