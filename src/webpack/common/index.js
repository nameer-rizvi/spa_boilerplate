const shared = require("../../shared");
const pluginsConfig = require("./plugins");
const outputConfig = require("./output");
const moduleConfig = require("./module");
const optimization = require("./optimization");

module.exports = (wp_isProduction) => {
  const isProduction = shared.isProduction || wp_isProduction;
  return {
    entry: {
      app: shared.path.toClient("/index.js"),
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    externals: {
      jsdom: "jsdom",
    },
    node: {
      fs: "empty",
    },
    plugins: pluginsConfig(isProduction),
    output: outputConfig(isProduction),
    module: moduleConfig(isProduction),
    optimization,
  };
};

// Create react app's webpack config:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
