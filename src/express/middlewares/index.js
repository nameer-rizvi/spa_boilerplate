const cors = require("./cors");
const expressJSON = require("./expressJSON");
const helmet = require("./helmet");
const historyApiFallback = require("./historyApiFallback");
const routes = require("../routes");
const singlePageApplication = require("./singlePageApplication");

module.exports = {
  application: [cors, helmet, historyApiFallback],
  api: [expressJSON, routes],
  singlePageApplication,
};
