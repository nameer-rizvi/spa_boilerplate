const name = require("../index")["client"]["name"];

module.exports = isProd => {
  return {
    title: name,
    favicon: null,
    meta: {
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      "theme-color": "#ffffff",
      description: "Express app serving react via webpack.",
      robots: "index,follow",
      googlebot: "index,follow"
    },
    minify: isProd,
    hash: false,
    cache: true
  };
};

// https://github.com/jantimon/html-webpack-plugin
