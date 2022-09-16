const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassRegex = /\.(?:scss|sass)$/;
const sassModuleRegex = /\.module\.(?:scss|sass)$/;

module.exports = {
  isEnvDevelopment,
  isEnvProduction,
  cssRegex,
  cssModuleRegex,
  lessRegex,
  lessModuleRegex,
  sassRegex,
  sassModuleRegex,
};
