const merge = require("webpack-merge");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const common = require("./common/index");
const name = require("../shared/index").name;

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
      short_name: name,
      name: name,
      description:
        "Express server serving a react client via webpack middleware.",
      icons: [
        {
          src: path.resolve(__dirname, "common/html/favicon.ico"),
          sizes: "48x48"
        }
      ],
      start_url: ".",
      display: "standalone",
      // theme_color & background_color should be
      // consistent with styling in the react app.
      theme_color: "#ffffff",
      background_color: "#20232a"
    })
  ]
});

// Create react app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
