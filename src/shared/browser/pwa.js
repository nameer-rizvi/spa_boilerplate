const {
  start_url,
  name,
  short_name,
  description,
  theme_color,
  background_color,
  display,
  orientation,
  icons
} = require("./props");

module.exports = {
  start_url,
  name,
  short_name,
  description,
  theme_color,
  background_color,
  display,
  orientation,
  icons
};

// Google's manifest criteria:
// https://developers.google.com/web/fundamentals/app-install-banners

// Webpack pwa manifest repo:
// https://github.com/arthurbergmz/webpack-pwa-manifest

// Create-react-app's manifest.json:
// https://github.com/react-cosmos/create-react-app-example/blob/master/public/manifest.json
