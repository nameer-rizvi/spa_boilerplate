const shared = require("../../shared/index");

module.exports = isProd => {
  const {
    name,
    themeColor,
    description,
    path: { toFavicon }
  } = shared;

  return {
    title: name,
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      "theme-color": themeColor,
      author: "Nameer Rizvi",
      description: `${description}.${
        !isProd ? " You can find me at /src/webpack/html/index.js." : ""
      }`,
      keywords: keywords(),
      "og:type": "website",
      "og:url": "https://ssr-boilerplate1.herokuapp.com/",
      "od:site_name": name,
      "og:title": name,
      "og:description": description,
      "og:image": toFavicon()
      // "twitter:site": "@username"
    },
    favicon: toFavicon(),
    minify: isProd,
    hash: false,
    cache: true
  };
};

function keywords() {
  const arr = [
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
    "server-side-rendering",
    "ssr"
  ];

  return arr.join(",");
}

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
