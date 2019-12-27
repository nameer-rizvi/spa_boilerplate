const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// Uncomment if using moment.js:
// const IgnorePlugin = require("webpack").IgnorePlugin;

const html = require("./html/index");

module.exports = isProd => {
  return [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(html(isProd)),
    new MiniCssExtractPlugin({
      filename: isProd ? "[name].[hash].css" : "[name].css",
      chunkFilename: isProd ? "[id].[hash].css" : "[id].css"
    })
    // Uncomment if using moment.js:
    // new IgnorePlugin(/^\.\/locale$/, /moment$/)
  ];
};
