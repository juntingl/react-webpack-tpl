const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("./config");
const paths = require("../paths");

const generatorStyleLoaders = (cssOptions, preProcessor, preProcessorOptions) => {
  const loaders = [
    config.isEnvDevelopment && "style-loader",
    config.isEnvProduction && {
      loader: MiniCssExtractPlugin.loader,
      options: paths.publicUrlOrPath.startsWith(".") ? { publicPath: "../../" } : {},
    },
    {
      loader: "css-loader",
      options: cssOptions,
    },
    "postcss-loader",
  ].filter(Boolean);

  if (preProcessor) {
    loaders.push({
      loader: preProcessor,
      options: preProcessorOptions,
    });
  }

  return loaders;
};

module.exports = () => {
  return [
    {
      test: config.cssRegex,
      exclude: config.cssModuleRegex,
      use: generatorStyleLoaders({
        importLoaders: 1,
        modules: {
          mode: "icss",
          // exportLocalsConvention: "camelCase",
        },
      }),
      sideEffects: true,
    },
    {
      test: config.cssModuleRegex,
      use: generatorStyleLoaders({
        importLoaders: 1,
        modules: {
          mode: "local",
          // getLocalIdent: getCSSModuleLocalIdent,
        },
      }),
      sideEffects: true,
    },
    // {
    //   test: config.lessRegex,
    //   use: generatorStyleLoaders(
    //     {
    //       importLoaders: 3,
    //       modules: {
    //         mode: "icss",
    //       },
    //     },
    //     "less-loader",
    //     {
    //       lessOptions: {
    //         modifyVars: {
    //           // "primary-color": "#ff7a45",
    //         },
    //         javascriptEnabled: true,
    //       },
    //     },
    //   ),
    //   sideEffects: true,
    // },
  ];
};
