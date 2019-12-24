const path = require("path");
const name = require("../../../shared/index")["name"];

module.exports = isProd => {
  return {
    title: name,
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      "theme-color": "#ffffff",
      author: "Nameer Rizvi",
      description: description(isProd),
      keywords: keywords(),
      "og:type": "website",
      "og:url": "https://ssr-boilerplate1.herokuapp.com/",
      "od:site_name": name,
      "og:title": name,
      "og:description": description(),
      "og:image": path.resolve(__dirname, "favicon.ico")
      // "twitter:site": "@username"
    },
    favicon: path.resolve(__dirname, "favicon.ico"),
    minify: isProd,
    hash: false,
    cache: true
  };
};

const description = isProd =>
  `SSR Boilerplate Template. Express app serving react via webpack.${
    !isProd ? " You can find me at /src/webpack/html/index.js." : ""
  }`;

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
// Favicon generator: https://favicon.io/
