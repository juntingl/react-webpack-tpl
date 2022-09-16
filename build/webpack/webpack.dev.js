const { merge } = require("webpack-merge");

const baseConfig  = require('./webpack.base');
const devServer = require('../devServer');

module.exports = merge(baseConfig, {
  mode: "development",
  devServer
});
