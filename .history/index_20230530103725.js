const express = require("express");
const app = express();

app.liste(5000, () => {
  console.log("Listening on localhost port 5000");
});
