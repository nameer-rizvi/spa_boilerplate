const express = require("express");
const router = express.Router();
const { isProd } = require("../shared");

router.use((req, res) =>
  res.status(200).send({
    welcome: `This has been fetched from the express server via axios, using the /api endpoint.${
      !isProd ? " You can find me at /src/express/api.js." : ""
    }`,
  })
);

module.exports = router;
