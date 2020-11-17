const { toDist } = require("../../shared").path;

module.exports = (isProduction) => ({
  path: toDist(),
  publicPath: "/",
  filename: isProduction ? "[name].[contenthash].js" : "[name].bundle.js",
});
