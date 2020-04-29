const merge = require("webpack-merge");
const common = require("./common/index");
const { port, path, settings } = require("../shared/index");

module.exports = merge(common(false), {
  mode: "development",
  devServer: {
    port: port.client,
    contentBase: path.toDist(),
    historyApiFallback: settings.historyApiFallback,
    hot: true,
    compress: true,
    stats: "minimal",
    clientLogLevel: "error",
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
            ...settings.eslint,
          },
        },
      },
    ],
  },
});

// If required to open devServer on a url
// other than "/", add this to devServer :
// openPage: "/search"
//
// Webpack's dev server documentation:
// https://webpack.js.org/configuration/dev-server/
//
// Create-react-app's webpack dev server config:
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpackDevServer.config.js
