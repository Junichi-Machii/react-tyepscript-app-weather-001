const express = require("express");
const app = express();

app.get(5000, () => {
  console.log("Listening on localhost port 5000");
});
