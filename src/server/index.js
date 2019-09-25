require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

app.listen(port, () => {
  console.log(`Server listening on port ${port} in ${env} environment.`);
});

const api = require("./api");
const ssr_production = require("./ssr/production");
const ssr_development = require("./ssr/development");

app.use("/api", api);
app.use(env === "production" ? ssr_production : ssr_development);
