const merge = require("webpack-merge");

const common = require("./common.js");
const toDist = require("../app/index")["path"].toDist;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: toDist()
  }
});
