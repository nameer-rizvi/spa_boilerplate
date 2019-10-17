const express = require("express");
const router = express.Router();

const isProd = require("../shared/index")["isProd"];

router.use((req, res) => {
  const data = {
    Welcome: `This has been fetched from the express server via api endpoint.${
      !isProd ? " You can find me at /src/express/api.js." : ""
    }`
  };

  res.status(200).send(data);
});

module.exports = router;
