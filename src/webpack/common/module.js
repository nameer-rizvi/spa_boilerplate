const MiniCssExtractPluginLoader = require("mini-css-extract-plugin")["loader"];

module.exports = isProd => {
  return {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPluginLoader,
            options: {
              hmr: !isProd
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      },
      {
        test: /\.(csv|tsv)$/,
        use: "csv-loader"
      },
      {
        test: /\.xml$/,
        use: "xml-loader"
      }
    ]
  };
};
