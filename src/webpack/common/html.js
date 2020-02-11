const {
  name,
  author,
  themeColor,
  description,
  path: { toFavicon }
} = require("../../shared/index");

module.exports = isProd => {
  const keywords = [
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
  ].join(",");

  return {
    title: name,
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      author,
      description: `${description}.${
        !isProd ? " You can find me at /src/webpack/html/index.js." : ""
      }`,
      keywords,
      "theme-color": themeColor,
      "og:type": "website",
      "og:url": "https://spa-boilerplate.herokuapp.com/",
      "od:site_name": name,
      "og:title": name,
      "og:description": description,
      "og:image": toFavicon
      // "twitter:site": "@username"
    },
    favicon: toFavicon,
    minify: isProd,
    hash: false,
    cache: true
  };
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
