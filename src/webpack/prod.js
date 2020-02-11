const path = require("path");
const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const common = require("./common/index");

const {
  name,
  description,
  themeColor,
  backgroundColor,
  path: {
    toFavicon16,
    toFavicon32,
    toFavicon,
    toFavicon192,
    toFavicon512,
    toFaviconApple
  }
} = require("../shared/index");

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
      name,
      description,
      short_name: name,
      start_url: "/",
      display: "standalone",
      orientation: "omit",
      theme_color: themeColor,
      background_color: backgroundColor,
      icons: [
        {
          src: toFavicon16,
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: toFavicon32,
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: toFavicon,
          sizes: "48x48",
          type: "image/x-icon"
        },
        {
          src: toFavicon192,
          sizes: "192x192",
          type: "image/png",
          destination: path.join("icons", "android")
        },
        {
          src: toFavicon512,
          sizes: "512x512",
          type: "image/png",
          destination: path.join("icons", "android")
        },
        {
          src: toFaviconApple,
          sizes: "180x180",
          type: "image/png",
          ios: "startup",
          destination: path.join("icons", "ios")
        }
      ]
    })
  ]
});

// Google's manifest criteria:
// https://developers.google.com/web/fundamentals/app-install-banners

// Webpack pwa manifest repo:
// https://github.com/arthurbergmz/webpack-pwa-manifest

// Create-react-app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
