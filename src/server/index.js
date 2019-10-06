require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const historyApiFallback = require("connect-history-api-fallback");

const app = express();

app.use(cors());
app.use(helmet());
app.use(historyApiFallback());

const port = require("../config/index")["port"]["server"];
const env = process.env.NODE_ENV;

// To set your environment variable, create a .env file
// in the project's root directory and in it write
// 'NODE_ENV=[environment name]'. Once saved, you will
// probably be required to exit the server and
// start it again via npm script.

app.listen(port, () => {
  console.log(`Server listening on port ${port} in ${env} environment.`);
});

const api = require("./api");
const ssr = require("./ssr");

app.use("/api", api);
app.use(ssr);
