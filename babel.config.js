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
  plugins: [
    [
      // 按需引入 antd 样式
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ],
  ],
};
