const express = require("express");
const router = express.Router();

const path = require("path");
const existsSync = require("fs")["existsSync"];
const toHtml = path.join(__dirname, "../../dist/index.html");

router.use((req, res) => {
  if (existsSync(toHtml)) {
    res.sendFile(toHtml);
  } else {
    const error = `Uh oh! Looks like the index.html is missing!
    Run 'npm run build' in the terminal and make sure the file
    exists at ${toHtml} before trying again.`;
    res.status(404).send(error);
  }
});

module.exports = router;
