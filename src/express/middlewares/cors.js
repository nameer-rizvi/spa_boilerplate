const cors = require("cors");
const { origin } = require("../../shared");

module.exports = cors({ origin });
