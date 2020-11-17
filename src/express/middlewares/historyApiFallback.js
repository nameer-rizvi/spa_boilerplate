const historyApiFallback = require("connect-history-api-fallback");
const { settings } = require("../../shared");

module.exports = historyApiFallback({
  htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
  ...settings.historyApiFallback,
});
