module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "react-hooks"],
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
    semi: ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
