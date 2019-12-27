const keywords = require("./keywords");

module.exports = (themeColor, description, isProd, name, toFavicon) => {
  return {
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
  };
};
