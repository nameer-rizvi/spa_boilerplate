const merge = require("webpack-merge");

const common = require("./common/index");
const shared = require("../shared/index");

const {
  path: { toDist },
  port: { client },
  eslint
} = shared;

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    port: client,
    contentBase: toDist(),
    historyApiFallback: { disableDotRule: true },
    hot: true,
    compress: true,
    stats: "minimal",
    clientLogLevel: "error"
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

// If required to open devServer on a url
// other than "/", add this to devServer :
// openPage: "/search"

// Webpack's dev server documentation:
// https://webpack.js.org/configuration/dev-server/

// Create-react-app's webpack dev server config:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
