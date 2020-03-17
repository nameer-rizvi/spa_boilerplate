const shared = require("../../shared/index");

const fs = require("fs");
const htmlExists = fs.existsSync(shared.path.toHtml);

const express = require("express");

const path = require("path");
const template = path.join(__dirname + "/template.html");

module.exports =
  shared.isProd && htmlExists
    ? express.static(shared.path.toDist())
    : (req, res) => res.status(404).sendFile(template);
