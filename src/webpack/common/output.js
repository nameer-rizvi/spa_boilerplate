const toDist = require("../../shared/index")["path"]["toDist"];

module.exports = isProd => {
  return {
    path: toDist(),
    publicPath: "/",
    filename: isProd ? "[name].[contenthash].js" : "[name].bundle.js"
  };
};
