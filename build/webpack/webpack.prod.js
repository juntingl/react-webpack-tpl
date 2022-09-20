const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const paths = require("../paths");
const baseConfig  = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    moduleIds: "deterministic",
    // runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      // maxInitialRequests: 3,
      cacheGroups: {
        antd: {
          name: "antd",
          test: /[\\/]node_modules[\\/](?:antd|@ant|@ant-design)[\\/]/,
          priority: 15,
          enforce: true,
        },
        common: {
          priority: 5,
          minSize: 0,
          minChunks: 2,
          name: "common",
        },
        vendors: {
          priority: 10,
          minSize: 0,
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin()
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `static/css/[name].[contenthash:8].css`,
      ignoreOrder: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.appPublic,
          to: paths.appBuild,
          globOptions: {
            ignore: ["**/index.html", "**/.DS_Store"],
          },
        },
      ],
    })
  ]
});
