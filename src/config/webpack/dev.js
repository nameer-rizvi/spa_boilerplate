const merge = require("webpack-merge");

const common = require("./common.js");
const toDist = require("../index")["path"].toDist;

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    contentBase: toDist(),
    hot: true
  }
});
