const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("../config/webpack.config.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: "/"
  })
);

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log("Example app listening on port 3000!\n");
});

// -----------------------------------------------------------------

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");

// const app = express();

// app.use(cors());
// app.use(helmet());

// const port = process.env.PORT || 5000;
// const api = require("./api");
// // const ssr = require("./ssr");

// app.listen(port, () => {
//   console.log(
//     `Server listening on port ${port} in ${process.env.NODE_ENV} environment.`
//   );
// });

// app.use("/api", api);
// // app.use(ssr);

// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const config = require("../config/webpack.config.js");
// const compiler = webpack(config);
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
//   })
// );
