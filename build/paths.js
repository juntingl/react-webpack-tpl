const fs = require("fs");
const path = require("path");

const getPublicUrlOrPath = require("./utils/getPublicUrlOrPath");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp("package.json")).homepage,
  process.env.PUBLIC_URL
);
const buildPath = process.env.BUILD_PATH || "dist";

module.exports = {
  appPath: resolveApp("."),
  appBuild: resolveApp(buildPath),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appSrc: resolveApp("src"),
  appIndexJS: resolveApp("src/index"),
  appTsConfig: resolveApp('tsconfig.json'),
  appNodeModules: resolveApp("node_modules"),
  appLessOptionsModifyVars: resolveApp("src/modifyVars"),
  publicUrlOrPath
};
