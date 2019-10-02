const loader = require("mini-css-extract-plugin").loader;

module.exports = hmr => {
  return {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: loader,
        options: {
          hmr: hmr
        }
      },
      "css-loader",
      "sass-loader"
    ]
  };
};
