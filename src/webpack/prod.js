const path = require("path");
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
          src: shared.path.toFavicon16,
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: shared.path.toFavicon32,
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: shared.path.toFavicon,
          sizes: "48x48",
          type: "image/x-icon"
        },
        {
          src: shared.path.toFavicon192,
          sizes: "192x192",
          type: "image/png",
          destination: path.join("icons", "android")
        },
        {
          src: shared.path.toFavicon512,
          sizes: "512x512",
          type: "image/png",
          destination: path.join("icons", "android")
        },
        {
          src: shared.path.toFaviconApple,
          sizes: "180x180",
          type: "image/png",
          ios: "startup",
          destination: path.join("icons", "ios")
        }
      ],
      start_url: "/",
      display: "standalone",
      orientation: "omit",
      theme_color: shared.themeColor,
      background_color: shared.backgroundColor
    })
  ]
});

// Google's manifest criteria:
// https://developers.google.com/web/fundamentals/app-install-banners

// Webpack pwa manifest repo:
// https://github.com/arthurbergmz/webpack-pwa-manifest

// Create-react-app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
