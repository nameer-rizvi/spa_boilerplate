const keywords = require("./keywords");

module.exports = props => {
  const { author, description, isProd, themeColor, name, toFavicon } = props;
  return {
    viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
    author: author,
    description: `${description}.${
      !isProd ? " You can find me at /src/webpack/html/index.js." : ""
    }`,
    keywords: keywords(),
    "theme-color": themeColor,
    "og:type": "website",
    "og:url": "https://ssr-boilerplate1.herokuapp.com/",
    "od:site_name": name,
    "og:title": name,
    "og:description": description,
    "og:image": toFavicon
    // "twitter:site": "@username"
  };
};
