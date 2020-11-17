const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { html } = require("../../shared").browser;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isProduction) => [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    ...html,
    minify: isProduction,
    hash: false,
    cache: true,
  }),
  new MiniCssExtractPlugin({
    filename: isProduction ? "[name].[hash].css" : "[name].css",
    chunkFilename: isProduction ? "[id].[hash].css" : "[id].css",
  }),
];

// If using moment.js:
//   1. Import IgnorePlugin:
//     const { IgnorePlugin } = require("webpack");
//   2. Add to return statement:
//     new IgnorePlugin(/^\.\/locale$/, /moment$/)
