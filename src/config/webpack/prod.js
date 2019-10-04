const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");

const common = require("./common.js");

module.exports = merge(common(true), {
  mode: "production",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
