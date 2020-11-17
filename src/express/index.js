require("dotenv").config();
const express = require("express");
const { port, endpoint } = require("../shared");
const { logger } = require("simpul");
const middlewares = require("./middlewares");

const server = express();

server.listen(port.server, () =>
  logger({ s: "Express server listening on port " + port.server + "." })
);

server.use(middlewares.application);

server.use(endpoint, middlewares.api);

server.use(middlewares.singlePageApplication);
