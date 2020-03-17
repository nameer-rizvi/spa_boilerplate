const express = require("express");
const router = express.Router();
const parseJSON = express.json({ limit: "1mb" });

const { isProd } = require("../shared/index");

router.use(parseJSON, (req, res) => {
  const data = {
    welcome: `This has been fetched from the express server via axios, using the /api endpoint.${
      !isProd ? " You can find me at /src/express/api.js." : ""
    }`
  };

  res.status(200).send(data);
});

module.exports = router;
