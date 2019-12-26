const shared = require("./src/shared/index").eslint;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  ...shared
};

// Create react app's eslint config:
// https://github.com/weyheyhey/react-express-ssr-boilerplate/blob/master/.eslintrc
