const express = require("express");
const router = express.Router();

router.use((req, res) => {
  const data = {
    welcome:
      "Welcome! This is the api route. Feel free to branch off from here.",
    key1: "value1",
    key2: "value2",
    key3: "value3"
  };

  res.status(200).send(data);
});

module.exports = router;
