const merge = require("webpack-merge");

const common = require("./common/index");
const shared = require("../shared/index");

const toDist = shared["path"]["toDist"];
const port = shared["port"]["client"];

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    contentBase: toDist(),
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: port,
    stats: "minimal",
    clientLogLevel: "none"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            cache: true
          }
        }
      }
    ]
  }
});

// Create react app's webpack/dev configs:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
