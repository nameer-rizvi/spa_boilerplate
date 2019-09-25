const express = require("express");
const router = express.Router();

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../config/webpack.config.js");
const compiler = webpack(config);
router.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// const env = process.env.NODE_ENV;

// if (env !== "production") {
//   const path = require("path");
//   const existsSync = require("fs")["existsSync"];
//   const bundleHTML = path.join(__dirname, "../dist/index.html");
//   router.use((req, res) => {
//     if (existsSync(bundleHTML)) {
//       console.log("Server using production bundle.");
//       res.sendFile(bundleHTML);
//     } else {
//       console.log("Server can't find index.html in production bundle.");
//       console.log(
//         `"Make sure file exists at ${bundleHTML}, after running build using 'npm run build'`
//       );
//       res.sendFile(bundleHTML);
//     }
//   });
// } else {
//   const webpack = require("webpack");
//   const webpackDevMiddleware = require("webpack-dev-middleware");
//   const config = require("../config/webpack.config.js");
//   const compiler = webpack(config);
//   console.log("Server using webpack dev middleware.");
//   router.use(
//     webpackDevMiddleware(compiler, {
//       publicPath: config.output.publicPath
//     })
//   );
// }

module.exports = router;
