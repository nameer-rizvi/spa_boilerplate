const { isProd, path } = require("../../shared/index");
const fs = require("fs");
const express = require("express");
const template = require("./template.js");

module.exports =
  isProd && fs.existsSync(path.toHtml)
    ? express.static(path.toDist())
    : (req, res) => res.status(404).send(template);
