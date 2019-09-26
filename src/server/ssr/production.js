const express = require("express");
const router = express.Router();

const existsSync = require("fs")["existsSync"];

const path = require("../../config/app/index")["webpack"]["path"];

router.use(
  existsSync(path.toHtml())
    ? express.static(path.toDist())
    : (req, res) => {
        const error = `Missing index.html... run 'npm run build' in
        the terminal and make sure the file exists in the directory
        ["${path.toHtml()}"] before trying again.`;
        res.status(404).send(error);
      }
);

module.exports = router;
