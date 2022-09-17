const { merge } = require("webpack-merge");
// 开启 transpileOnly 后，使用 fork-ts-checker-webpack-plugin 进行类型检查
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const baseConfig  = require('./webpack.base');
const devServer = require('../devServer');

module.exports = merge(baseConfig, {
  mode: "development",
  devServer,
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
});
