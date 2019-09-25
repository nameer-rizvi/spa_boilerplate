const merge = require("webpack-merge");

const common = require("./webpack.common.js");
const toDist = require("./app/index")["webpack"]["path"].toDist;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: toDist()
  }
});
