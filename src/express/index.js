require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");
const logti = require("logti");
const { settings, endpoint, port } = require("../shared/index");
const api = require("./routes/index");
const spa = require("./spa/index");
const env = process.env.NODE_ENV;

const server = express();

server.use(express.json({ limit: "1mb" }));
server.use(cors());
server.use(helmet());
server.use(
  historyApiFallback({
    htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
    ...settings.historyApiFallback,
  })
);

server.listen(port.server, () =>
  logti(`🚀 Express server listening on port ${port.server} in ${env}.`)
);

server.use(endpoint, api);
server.use(spa);
