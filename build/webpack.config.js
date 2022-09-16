const devConfig = require('./webpack/webpack.dev');
const prdConfig = require('./webpack/webpack.prod');

module.exports = () => {
  const env = process.env.NODE_ENV || "development";
  return env === "development" ? devConfig : prdConfig;
};
