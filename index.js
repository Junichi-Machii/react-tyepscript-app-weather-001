const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware")

app.get("/", (req, res) => {
  res.send("This is my proxy server");
});

app.use("/react-typescript-app-weather001", (req, res,next) => {
  createProxyMiddleware({
    target: "http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505",
    changeOrigin: true,
    pathRewrite:{
      [`^/react-typescript-app-weather001`]: "",
    },
  })(req, res, next)
})

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
