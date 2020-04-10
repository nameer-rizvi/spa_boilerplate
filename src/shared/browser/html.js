const {
  name,
  viewport,
  author,
  description,
  keywords,
  theme_color,
  type,
  url,
  faviconPath,
  // twitterUsername
} = require("./props");

module.exports = {
  title: name,
  meta: {
    viewport,
    author,
    description,
    keywords,
    "theme-color": theme_color,
    "og:type": type,
    "og:url": url,
    "od:site_name": name,
    "og:title": name,
    "og:description": description,
    "og:image": faviconPath,
    // "twitter:site": twitterUsername
  },
  favicon: faviconPath,
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
