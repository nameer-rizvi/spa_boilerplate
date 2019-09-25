const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = require("./app")["webpack"];
const path = config["path"];

module.exports = {
  mode: "development",
  entry: {
    app: path.toClient("/index.js")
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.toDist()
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin(config["html"])],
  output: {
    filename: "[name].bundle.js",
    path: path.toDist()
    // publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
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
