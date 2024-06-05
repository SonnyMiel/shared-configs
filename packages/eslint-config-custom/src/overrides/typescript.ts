import importPlugin from "eslint-plugin-import";

import typescriptPlugin from "typescript-eslint";
import typescriptParser from "@typescript-eslint/parser";

import type { FlatConfigItem } from "../types.js";

export default [
  ...(typescriptPlugin.configs.all.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  }))),
  {
    ...(importPlugin.configs.typescript),
    name: "overrides/typescript",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],

    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parserOptions: {
        project: ["apps/*/tsconfig.json", "packages/*/tsconfig.json", "./tsconfig.json"],
        // extraFileExtensions: [".json", ".html"]
        // tsconfigRootDir: import.meta.url,
        // tsconfigRootDir: process.cwd(),
      },
      parser: typescriptParser,
    },

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
  }] satisfies FlatConfigItem;
