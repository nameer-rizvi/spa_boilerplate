const { toDist } = require("../../shared").path;

module.exports = (isProd) => {
  return {
    path: toDist(),
    publicPath: "/",
    filename: isProd ? "[name].[contenthash].js" : "[name].bundle.js",
  };
};
