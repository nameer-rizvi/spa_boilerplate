const {
  path: { toDist }
} = require("../../shared/index");

module.exports = isProd => {
  return {
    path: toDist(),
    publicPath: "/",
    filename: isProd ? "[name].[contenthash].js" : "[name].bundle.js"
  };
};
