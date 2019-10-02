const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./common.js");
const toDist = require("../index")["path"].toDist;
const css = require("./css");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: toDist(),
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [css(true)]
  }
});
