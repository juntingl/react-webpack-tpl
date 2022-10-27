const paths = require("./paths");

module.exports = {
  // 指定文件的路径就是 output 输出路径，
  // 如果 output 设置了 publicPath: '/public/',
  // 这里 historyApiFallback 也要设置下 为 index: '/public/index.html'
  historyApiFallback: {
    disableDotRule: true,
    index: paths.publicUrlOrPath,
    // rewrites: [{ from: /.*/, to: path.posix.join("/", "index.html") }],
  },
  static: {
    directory: paths.appPublic,
  },
  compress: true,
  host: "0.0.0.0",
  port: 9001,
  hot: true,
  open: true,
  client: {
    progress: true,
    overlay: { warnings: false, errors: true },
  },
  // proxy: {
  //   "/api": {
  //     target: "",
  //     changeOrigin: true,
  //     pathRewrite: (p) => p.replace(/^\/api/, ""),
  //   },
  // },
};
