const {
  isProd,
  path: { toHtml, toDist }
} = require("../../shared/index");

const fs = require("fs");
const htmlExists = fs.existsSync(toHtml);

const express = require("express");

const path = require("path");
const template = path.join(__dirname + "/template.html");

module.exports =
  isProd && htmlExists
    ? express.static(toDist())
    : (req, res) => res.status(404).sendFile(template);
