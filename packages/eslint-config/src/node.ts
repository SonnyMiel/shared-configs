import { fixupPluginRules } from "@eslint/compat";

import n from "eslint-plugin-n";
import sdl from "@microsoft/eslint-plugin-sdl";
import * as sonar from "eslint-plugin-sonar";

import nodeRules from "./rules/node";

/// <reference types="@eslint-types/typescript-eslint" />

export default [
  {
    name: "configs/node",
  },
  n.configs["flat/recommended"],
  {
    plugins: {
      "@microsoft/sdl": sdl,
      sonar: fixupPluginRules(sonar),
    }
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  },
  ...nodeRules,
];
