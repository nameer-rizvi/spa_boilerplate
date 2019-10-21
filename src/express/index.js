require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");

const app = express();

app.use(cors());
app.use(helmet());
app.use(historyApiFallback());

const shared = require("../shared/index");
const log = shared["log"];
const port = shared["port"]["server"];
const env = process.env.NODE_ENV;

// To set your environment variable, create a .env file
// in the project's root folder and in it write
// 'NODE_ENV=[environment name]'. Once saved, you will
// probably be required to exit the server and
// start it again via npm script.

app.listen(port, () => {
  log({
    emoji: "🚀",
    label: "[EXPRESS]",
    message: `Server listening on port ${port} in ${env} environment.`
  });
});

const endpoint = shared["endpoint"];
const api = require("./api");
const ssr = require("./ssr/index");

app.use(endpoint, api);
app.use(ssr);
