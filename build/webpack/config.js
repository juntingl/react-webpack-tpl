const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

// Languages regex
const languageRegex = /.(?:js|ts|tsx)$/;

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(?:scss|sass)$/;
const sassModuleRegex = /\.module\.(?:scss|sass)$/;

// static files regexes
const fontRegex = /\.(woff|woff2|eot|ttf|otf)$/;
const imageRegex = /\.(?:png|jpeg|jpg|svg|gif|bmp)$/;

const fontFilename = isEnvProduction ? "static/fonts/[name][hash:8].[ext]" : "fonts/[name].[ext]";
const imageFilename = isEnvProduction ? "static/images/[name].[hash:8].[ext]" : "images/[name].[ext]";

module.exports = {
  isEnvDevelopment,
  isEnvProduction,
  languageRegex,
  cssRegex,
  cssModuleRegex,
  lessRegex,
  lessModuleRegex,
  sassRegex,
  sassModuleRegex,
  fontRegex,
  imageRegex,
  fontFilename,
  imageFilename,
  imageDataUrlConditionMaxSize: 8 * 1024
};
