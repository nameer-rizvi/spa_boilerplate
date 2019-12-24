const shared = require("../../shared/index");

const pluginsConfig = require("./plugins");
const outputConfig = require("./output");
const moduleConfig = require("./module");
const optimization = require("./optimization");

module.exports = wp_isProd => {
  const { path, node_isProd } = shared;

  const isProd = node_isProd || wp_isProd;

  return {
    entry: {
      app: path.toClient("/index.js")
    },
    devtool: isProd ? "source-map" : "inline-source-map",
    externals: {
      jsdom: "jsdom"
    },
    plugins: pluginsConfig(isProd),
    output: outputConfig(isProd),
    module: moduleConfig(isProd),
    optimization
  };
};

// Create react app's webpack config:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
