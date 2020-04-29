const merge = require("webpack-merge");
const common = require("./common/index");
const { GenerateSW } = require("workbox-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { pwa } = require("../shared/index").browser;

module.exports = merge(common(true), {
  mode: "production",
  plugins: [
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/asset-manifest\.json$/],
    }),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    new WebpackPwaManifest(pwa),
  ],
});
