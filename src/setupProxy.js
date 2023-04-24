// import * as express from "express";
const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app: express.Application) {
// module.exports = function (app: any) {
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1", {
      target: "https://openapi.naver.com",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api/": "/",
      // },
    })
  );
  app.use(
    createProxyMiddleware("/ttb", {
      target: "http://www.aladin.co.kr",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/api/": "/",
      // },
    })
  );
  // app.use(
  //   createProxyMiddleware("/NL", {
  //     target: "https://www.nl.go.kr",
  //     changeOrigin: true,
  //     // pathRewrite: {
  //     //   "^/api/": "/",
  //     // },
  //   })
  // );
};
