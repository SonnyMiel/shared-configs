// @ts-check
const { defineConfig } = require("eslint-define-config");

/// <reference types="@eslint-types/typescript-eslint" />

module.exports = defineConfig({
  plugins: [
    "promise",
    "security",
    "import",
    "unicorn",
    // "array-func",
    "sonarjs",
    "eslint-comments",
    "no-use-extend-native",
    "@shopify",
    "regexp",
    "@microsoft/sdl",
    "no-unsanitized",
    "unused-imports",
    "sonar",
    "simple-import-sort",
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // tsconfigRootDir: __dirname,
    project: ["apps/*/tsconfig.json", "packages/*/tsconfig.json", "./tsconfig.json"],
  },

  env: {
    "es2023": true
  },

  reportUnusedDisableDirectives: true,

  ignorePatterns: [
    "!.*",

    ".git/",
    "**/node_modules/*",
    "bower_components/",
    "jspm_packages/",
    ".npm/",
    "vendor/",

    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",

    "lib-cov/",
    "coverage/",
    ".nyc_output/",
    ".cache/",

    "build/",
    "dist/",
    "tmp/",

    "styled-system/",
    "panda.config.ts",

    "tsconfig.json",
    "vite.config.ts",
    "tsup.config.ts",

    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
    ".eslintrc*.*",

    "*.min.*",
    "*.d.ts",
  ],

  overrides: [
    {
      files: ["*.htm", "*.html"],

      plugins: ["@html-eslint"],

      parser: "@html-eslint/parser",
    },
    {
      files: ["*.cjs", ".*.cjs", "*.cts", ".*.cts"],

      parserOptions: {
        sourceType: "script"
      },

      env: {
        commonjs: true
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/all",
      ],

      plugins: [
        "import",
        "eslint-plugin-no-explicit-type-exports",
        "etc",
        "total-functions",
        "sonar"
      ],

      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },

        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true
          }
        },

        node: {
          tryExtensions: [
            ".mjs",
            ".cjs",
            ".js",
            ".json",
            ".node",
            ".mts",
            ".cts",
            ".ts",
            ".d.ts"
          ],
        },
      },
    },
  ],
});
