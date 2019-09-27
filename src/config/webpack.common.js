const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./app/index")["webpack"];
const path = config["path"];
const env = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    app: path.toClient("/index.js")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(config["html"]),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  output: {
    filename: env ? "[name].[contenthash].js" : "[name].bundle.js",
    path: path.toDist()
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      // chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: env
          ? [MiniCssExtractPlugin.loader, "css-loader"]
          : ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: env
          ? [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          : ["style-loader", "css-loader", "sass-loader"]
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
