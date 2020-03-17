const path = require("path");
const { name, description, theme_color } = require("./index");

const faviconPath = path.resolve(__dirname, "favicon/favicon_io/favicon.ico");

module.exports = {
  title: name,
  meta: {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    author: "Nameer Rizvi",
    description,
    keywords: [
      "javascript",
      "node",
      "nodejs",
      "express",
      "expressjs",
      "react",
      "reactjs",
      "webpack",
      "webpack-middleware",
      "boilerplate",
      "boilerplate-template",
      "boilerplate-application",
      "single-page-application",
      "spa"
    ].join(", "),
    "theme-color": theme_color,
    "og:type": "website",
    "og:url": "https://spa-boilerplate.herokuapp.com/",
    "od:site_name": name,
    "og:title": name,
    "og:description": description,
    "og:image": faviconPath
    // "twitter:site": "@username"
  },
  favicon: faviconPath
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
