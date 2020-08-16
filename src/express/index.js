require("dotenv").config();
const express = require("express");
const { port, settings, origin, endpoint } = require("../shared");
const { logger } = require("simpul");
const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");
const api = require("./api");
const spa = require("./spa");

const server = express();

server.listen(port.server, () =>
  logger({ s: `express server listening on port ${port.server}.` })
);

const historyApiFallbackSettings = {
  htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
  ...settings.historyApiFallback,
};

server.use(express.json({ limit: "1mb" }));
server.use(cors({ origin }));
server.use(helmet());
server.use(historyApiFallback(historyApiFallbackSettings));
server.use(endpoint, api);
server.use(spa);
