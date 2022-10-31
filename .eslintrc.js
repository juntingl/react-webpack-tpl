module.exports = {
  env: {
    browser: true,
    es2021: true,
    // "jest": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    quotes: ["error", "double"],
    "react/jsx-wrap-multilines": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": 0,
  },
};
