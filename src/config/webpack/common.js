const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("../index")["path"];
const html = require("./html");

module.exports = wp_isProd => {
  const isProd = process.env.NODE_ENV === "production" || wp_isProd;
  return {
    entry: {
      app: path.toClient("/index.js")
    },
    devtool: isProd ? "source-map" : "inline-source-map",
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(html(isProd)),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name].[hash].css" : "[name].css",
        chunkFilename: isProd ? "[id].[hash].css" : "[id].css"
      })
    ],
    output: {
      path: path.toDist(),
      filename: isProd ? "[name].[contenthash].js" : "[name].bundle.js"
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
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
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
};
