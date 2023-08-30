/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-30 14:39:46
 * @FilePath: \webpackLoader\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const filePlugin = require('./src/plugin/filePlugin')
const EntryPlugin = require('./src/plugin/entryPlugin')
module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  mode: "development",
  // check error code
  devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: [
//           { loader: "./src/loader/testLoader" },
//           {
//             loader: "./src/loader/consoleLoader",
//             options: {
//               author: "hello loader",
//               email: "helloloader@qq.com",
//             },
//           },
//         ],
//       },
//       {
//         //引入css资源
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
  optimization: {
    //cache
    // moduleIds: 'deterministic',
    //  runtimeChunk: 'single',
    splitChunks: {
      chunks: "initial",// initial all async
    },
  },
  plugins: [
    new EntryPlugin(),
    new filePlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    //打包分析
    new BundleAnalyzerPlugin(),
  ],
};
