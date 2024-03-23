// @ts-check
const { defineConfig } = require("eslint-define-config");

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  root: true,
  extends: [
    '@template/eslint-config-custom/strict',
    '@template/eslint-config-custom/react',
  ],
});

