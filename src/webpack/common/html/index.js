const shared = require("../../../shared/index");
const meta = require("./meta/index");

module.exports = isProd => {
  const {
    name,
    author,
    themeColor,
    description,
    path: { toFavicon }
  } = shared;

  return {
    title: name,
    meta: meta({ author, description, isProd, themeColor, name, toFavicon }),
    favicon: toFavicon,
    minify: isProd,
    hash: false,
    cache: true
  };
};

// Html-webpack-plugin:
// - https://github.com/jantimon/html-webpack-plugin
// - https://github.com/jantimon/html-webpack-plugin#Plugins
