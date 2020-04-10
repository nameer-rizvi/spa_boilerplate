const { path } = require("../../shared/index");

module.exports = (isProd) => {
  return {
    path: path.toDist(),
    publicPath: "/",
    filename: isProd ? "[name].[contenthash].js" : "[name].bundle.js",
  };
};
