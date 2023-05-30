const express = require("express");
const app = express();
const { createProxyMiddleware } = require("")

app.get("/", (req, res) => {
  res.send("This is my proxy server");
});

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
