module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic", // 自动注入运行时代码
      }
    ],
    "@babel/preset-typescript",
  ],
  plugins: [],
};
