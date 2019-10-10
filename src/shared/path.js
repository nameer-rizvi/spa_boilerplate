const path = require("path");

const pathResolve = dir => path.resolve(__dirname, dir);

module.exports = {
  toDist: ext => pathResolve(`../dist${ext ? `/${ext}` : ""}`),
  toClient: ext => pathResolve(`../react${ext ? `/${ext}` : ""}`),
  toHtml: () => pathResolve("../dist/index.html")
};
