const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware")

app.get("/", (req, res) => {
  res.send("This is my proxy server");
});

app.use("/react-typescript-app-weather001", (req, res,next) => {
  createProxyMiddleware({
    target: "https://react-typescript-app-weather001.netlify.app/",
    changeOrigin: true,
    pathRewrite:{
      [`^/react-typescript-app-weather001`]: "",
    },
  })
})(req, res, ne)

app.listen(5000, () => {
  console.log("Listening on localhost port 5000");
});
