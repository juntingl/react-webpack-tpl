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
    "react/prop-types": 0,
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/jsx-wrap-multilines": "error",
    "react/react-in-jsx-scope": "off",
    // TypeScript ESLint
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/consistent-type-imports": "warn",
  },
};
