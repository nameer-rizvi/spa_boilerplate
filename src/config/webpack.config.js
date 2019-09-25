const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const html = require("./html");

const path_dist = "../dist";
const path_client = "../client";

module.exports = {
  mode: "development",
  entry: {
    app: `${path_client}/index.js`,
    print: `${path_client}/print.js`
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path_dist
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin(html)],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, path_dist)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
