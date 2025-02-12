const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

// Proxy all model requests
app.use(
  "/models",
  createProxyMiddleware({
    target: "https://huggingface.co", // Hugging Face model server
    changeOrigin: true,
    pathRewrite: { "^/models": "/Xenova/whisper-tiny" },
    onProxyRes(proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
