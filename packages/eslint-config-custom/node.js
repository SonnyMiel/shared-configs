// @ts-check
const { defineConfig } = require("eslint-define-config");

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  extends: [
    "plugin:n/recommended",
  ],

  plugins: ["@microsoft/sdl", "sonar"],

  parserOptions: { ecmaVersion: "latest" },

  overrides: [
    {
      files: ["*.cjs", ".*.cjs", "*.mjs", ".*.mjs"],

      parserOptions: { ecmaVersion: "latest" }
    },
    {
      files: ["*.ts", "*.cts", "*.mts", ".*.ts", ".*.cts", ".*.mts"],

      rules: {
        "n/file-extension-in-import": ["error", "never"]
      }
    }
  ]
});
