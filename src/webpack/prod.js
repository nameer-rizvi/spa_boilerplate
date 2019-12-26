const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const common = require("./common/index");
const shared = require("../shared/index");

module.exports = merge(common(true), {
  mode: "production",
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/asset-manifest\.json$/]
    }),
    new ManifestPlugin({ fileName: "asset-manifest.json" }),
    new WebpackPwaManifest({
      short_name: shared.name,
      name: shared.name,
      description: shared.description,
      icons: [
        {
          src: shared.path.toFavicon(),
          sizes: "48x48",
          ios: "startup"
        }
      ],
      start_url: ".",
      display: "standalone",
      orientation: "omit",
      theme_color: shared.themeColor,
      background_color: shared.backgroundColor
    })
  ]
});

// Webpack pwa manifest:
// https://github.com/arthurbergmz/webpack-pwa-manifest
// Create react app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
