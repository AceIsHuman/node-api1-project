// implement your API here

const express = require("express");

const server = express();

server.listen(4000, () => {
  console.log("==== listening on port 4000 ====");
});

server.post("/api/users", (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});
