// @ts-check
const { defineConfig } = require("eslint-define-config");

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  extends: [
    "plugin:import/react",
    "plugin:react/all",
    "plugin:react-hooks/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hook-form/recommended",
    "plugin:react-form-fields/recommended",
    "plugin:react-perf/all",
  ],

  plugins: [
    "import",
    "@shopify",
    "validate-jsx-nesting",
    "sonar",
    "react",
    "@arthurgeron/react-usememo",
  ],

  env: {
    browser: true
  },

  overrides: [
    {
      files: ["*.jsx"]
    },
  ],

  settings: {
    react: {
      version: "detect"
    },
    "jsx-a11y": {
      polymorphicPropName: "as",
      components: {
        Image: "img",
        Img: "img"
      }
    }
  }
});
