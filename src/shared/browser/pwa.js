const icons = require("./favicon/index");

const { name, description, theme_color, background_color } = require("./index");

module.exports = {
  name,
  description,
  theme_color,
  background_color,
  short_name: "[spa]",
  start_url: "/",
  display: "standalone",
  orientation: "omit",
  icons
};

// Google's manifest criteria:
// https://developers.google.com/web/fundamentals/app-install-banners

// Webpack pwa manifest repo:
// https://github.com/arthurbergmz/webpack-pwa-manifest

// Create-react-app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
