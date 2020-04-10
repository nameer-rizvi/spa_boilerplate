require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");

const { settings, endpoint, port } = require("../shared/index");

app.use(cors());
app.use(helmet());
app.use(
  historyApiFallback({
    htmlAcceptHeaders: ["text/html", "application/xhtml+xml"],
    ...settings.historyApiFallback,
  })
);

app.use(express.json({ limit: "1mb" }));

const logti = require("logti");
const env = process.env.NODE_ENV;

app.listen(port.server, () =>
  logti(
    `🚀 Express server listening on port ${port.server} in ${env} environment.`
  )
);

const api = require("./api");
const spa = require("./spa/index");

app.use(endpoint, api);
app.use(spa);
