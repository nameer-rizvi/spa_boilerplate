const merge = require("webpack-merge");

const common = require("./common/index");
const shared = require("../shared/index");

const toDist = shared["path"]["toDist"];
const port = shared["port"]["client"];
const eslint = shared["eslint"];

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    contentBase: toDist(),
    historyApiFallback: { disableDotRule: true },
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
            cache: true,
            ...eslint
          }
        }
      }
    ]
  }
});

// Webpack's dev server options:
// https://webpack.js.org/configuration/dev-server/

// Create react app's webpack/dev configs:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
