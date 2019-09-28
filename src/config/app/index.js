// RULE: "ANYTHING" REQUIRED IN MORE THAN ONE FILE,
// OR IS A CONSTANT CONFIGUARATION SETTING GOES HERE.

const path = require("path");

const pathResolve = dir => path.resolve(__dirname, dir);

module.exports = {
  path: {
    toDist: ext => pathResolve(`../../dist${ext ? `/${ext}` : ""}`),
    toClient: ext => pathResolve(`../../client${ext ? `/${ext}` : ""}`),
    toHtml: () => pathResolve("../../dist/index.html")
  }
};
