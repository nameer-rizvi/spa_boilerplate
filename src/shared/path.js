const path = require("path");

const pathResolve = dir => path.resolve(__dirname, dir);

module.exports = {
  toDist: ext => pathResolve(`../dist${ext ? `/${ext}` : ""}`),
  toClient: ext => pathResolve(`../react${ext ? `/${ext}` : ""}`),
  toHtml: () => pathResolve("../dist/index.html"),
  toFavicon: () => pathResolve("favicon_io/favicon.ico"),
  toFavicon16: () => pathResolve("favicon_io/favicon-16x16.png"),
  toFavicon32: () => pathResolve("favicon_io/favicon-32x32.png"),
  toFavicon192: () => pathResolve("favicon_io/android-chrome-192x192.png"),
  toFavicon512: () => pathResolve("favicon_io/android-chrome-512x512.png"),
  toFaviconApple: () => pathResolve("favicon_io/apple-touch-icon.png")
};

// Favicon generator: https://favicon.io/
