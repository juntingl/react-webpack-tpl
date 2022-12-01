const { merge } = require("webpack-merge");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const StatoscopeWebpackPlugin = require("@statoscope/webpack-plugin").default;

const prdConfig = require("./webpack/webpack.prod");

module.exports = merge(prdConfig, {
  plugins: [new StatoscopeWebpackPlugin()],
});
