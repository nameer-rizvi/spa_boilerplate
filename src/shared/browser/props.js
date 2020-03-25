const icons = require("./favicon/index");
const { color, backgroundColor, fontFamily } = require("./style");

module.exports = {
  type: "website",
  url: "https://spa-boilerplate.herokuapp.com/",
  start_url: "/",
  name: "[app name]",
  short_name: "[app]",
  author: "Nameer Rizvi",
  // twitterUsername: "@username",
  description: "Express server serving a react client via webpack middleware.",
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
  theme_color: color,
  background_color: backgroundColor,
  fontFamily: fontFamily,
  style: `color: ${color}; background-color: ${backgroundColor}; font-family: ${fontFamily};`,
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  display: "standalone",
  orientation: "omit",
  faviconPath: icons[2].src,
  icons
};
