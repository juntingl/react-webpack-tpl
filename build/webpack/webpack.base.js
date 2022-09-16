const fs = require('fs');
const WebpackBar = require("webpackbar");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 开启 transpileOnly 后，使用 fork-ts-checker-webpack-plugin 进行类型检查
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const threadLoader = require('thread-loader');

const config = require("./config");
const paths = require("../paths");
const styleLoaders = require('./styleLoaders');

// 预先
threadLoader.warmup(
  {
    worker: 2
  },
  [
    "babel-loader",
    // "sass-loader"
  ]
);

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

module.exports = {
  devtool: config.isEnvProduction ? (shouldUseSourceMap ? "source-map" : false) : "cheap-module-source-map",
  entry: {
    app: paths.appIndexJS
  },
  output: {
    // webpack有能力在输出包中生成路径信息。然而，这会给捆绑数千个模块的项目带来垃圾收集的压力。
    pathinfo: config.isEnvDevelopment,
    filename: config.isEnvProduction ? "static/js/[name].[contenthash:8].js" : "static/js/bundle.js",
    chunkFilename: config.isEnvProduction ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
    path: paths.appBuild, // 输出路径
    publicPath: paths.publicUrlOrPath,
  },
  // 持久化缓存
  cache: {
    // 1. 将缓存类型设置为文件系统
    type: "filesystem",
    buildDependencies: {
      // 2. 将你的 config 添加为 buildDependency，以便在改变 config 时获得缓存无效
      config: [__filename],
      tsconfig: [paths.appTsConfig].filter(f => fs.existsSync(f))
    },
  },
  /**
   * 解析文件规则
   */
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "src": paths.appSrc,
    },
    // 解析模块时应该搜索的目录, 相对路径和绝对路径搜索时会有差异，导致某模块寻找不到
    modules: [paths.appSrc, "node_modules"],
    mainFields: ["main"]
  },
  /**
   * 使用相关 module 解析各种语言
   */
  module: {
    parser: {
      javascript: {
        exportsPresence: 'error',
      },
    },
    rules: [
      ...styleLoaders(),
      {
        test: /.(?:js|ts|tsx)$/,
        include: paths.appSrc,
        use: [
          "thread-loader",
          "babel-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset",
        generator: {
          filename: config.isEnvProduction ? "fonts/[name][hash:8].[ext]" : "fonts/[name].[ext]",
        },
      },
      {
        test: /\.(?:png|jpeg|jpg|svg|gif|bmp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于等于 8M 自动转换 base64
          },
        },
        generator: {
          filename: config.isEnvProduction ? "images/[name].[hash:8].[ext]" : "images/[name].[ext]",
        }
      },
    ]
  },
  plugins: [
    new WebpackBar(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: paths.appHtml,
      chunksSortMode: "none",
      chunks: ["app"],
      inject: true,
    }),
  ],
  // 观测模式
  watchOptions: {
    ignored: /node_modules/,
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: config.isEnvProduction ? "warning" : false, // 打开/关闭提示
  },
}
