const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./common.js");
const css = require("./css");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    })
  ],
  output: {
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [css(false)]
  }
});
