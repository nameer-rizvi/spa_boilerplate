const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { html } = require("../../shared").browser;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isProd) => [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    ...html,
    minify: isProd,
    hash: false,
    cache: true,
  }),
  new MiniCssExtractPlugin({
    filename: isProd ? "[name].[hash].css" : "[name].css",
    chunkFilename: isProd ? "[id].[hash].css" : "[id].css",
  }),
];

// If using moment.js:
//   1. Import IgnorePlugin:
//     const { IgnorePlugin } = require("webpack");
//   2. Add to return statement:
//     new IgnorePlugin(/^\.\/locale$/, /moment$/)
