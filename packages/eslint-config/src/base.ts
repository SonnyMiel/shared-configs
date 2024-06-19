import { fixupPluginRules } from "@eslint/compat";

import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import htmlPlugin from "@html-eslint/eslint-plugin";
import jsonPlugin from "eslint-plugin-jsonc";
import noOnlyTests from "eslint-plugin-no-only-tests";
import sortClassMembersPlugin from "eslint-plugin-sort-class-members";
import * as sonar from "eslint-plugin-sonar";
import sonarjs from "eslint-plugin-sonarjs";
import noExplicitTypeExportsPlugin from "eslint-plugin-no-explicit-type-exports";
import etcPlugin from "eslint-plugin-etc";
import totalFunctionsPlugin from "eslint-plugin-total-functions";
import arrayFunc from "eslint-plugin-array-func";
import eslintComments from "eslint-plugin-eslint-comments";
import noConstructorBind from "eslint-plugin-no-constructor-bind";
import noUnsanitized from "eslint-plugin-no-unsanitized";
import noUseExtendNative from "eslint-plugin-no-use-extend-native";
import perfectionist from "eslint-plugin-perfectionist";
import promisePlugin from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import sdl from "@microsoft/eslint-plugin-sdl";
import security from "eslint-plugin-security";
import shopify from "@shopify/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

// Rules
import arrayRules from "./rules/array.js";
import commentRules from "./rules/comment.js";
import eslintRules from "./rules/default.js";
import importRules from "./rules/import.js";
import noConstructorBindRules from "./rules/no-constructor-bind.js";
import noUnsanitizedRules from "./rules/no-unsanitized.js";
import noUseExtendNativeRules from "./rules/no-use-extend-native.js";
import perfectionistRules from "./rules/perfectionist.js";
import promiseRules from "./rules/promise.js";
import regexpRules from "./rules/regexp.js";
import sdlRules from "./rules/sdl.js";
import securityRules from "./rules/security.js";
import shopifyRules from "./rules/shopify.js";
import sortClassMembers from "./rules/sort-class-members.js";
import simpleImportSortRules from "./rules/simple-import-sort.js";
import sonarRules from "./rules/sonar.js";
import sonarjsRules from "./rules/sonarjs.js";
import unicornRules from "./rules/unicorn.js";
import unusedImportsRules from "./rules/unused-imports.js";

// Overrides
import commonjs from "./overrides/commonjs.js";
import html from "./overrides/html.js";
import javascript from "./overrides/javascript.js";
import json from "./overrides/json.js";
import test from "./overrides/test.js";
import toml from "./overrides/toml.js";
import typescript from "./overrides/typescript.js";
import yaml from "./overrides/yaml.js";

import type { FlatConfigItem } from "./types.js";

/// <reference types="@eslint-types/typescript-eslint" />

export default [
  {
    name: "configs/base",
    plugins: {
      import: fixupPluginRules(importPlugin),
      unicorn,
      "@html-eslint": htmlPlugin,
      jsonc: jsonPlugin,
      "no-only-tests": noOnlyTests,
      "sort-class-members": sortClassMembersPlugin,
      sonar: fixupPluginRules(sonar),
      sonarjs: fixupPluginRules(sonarjs),
      "eslint-plugin-no-explicit-type-exports": noExplicitTypeExportsPlugin,
      etc: etcPlugin,
      "total-functions": totalFunctionsPlugin,
      "array-func": arrayFunc,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      security: fixupPluginRules(security),
      "eslint-comments": eslintComments,
      "@shopify": shopify,
      "no-constructor-bind": noConstructorBind,
      "no-unsanitized": fixupPluginRules(noUnsanitized),
      "no-use-extend-native": noUseExtendNative,
      perfectionist,
      "promise": fixupPluginRules(promisePlugin),
      regexp,
      "@microsoft/sdl": sdl,
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    ignores: [
      "!.*",

      "**/.git",
      "**/node_modules",
      "**/bower_components",
      "**/jspm_packages",
      "**/.npm",
      "**/vendor",

      "**/package-lock.json",
      "**/pnpm-lock.yaml",
      "**/yarn.lock",

      "**/lib-cov/",
      "**/coverage/",
      "**/.nyc_output/",
      "**/.cache/",

      "**/build",
      "**/dist",
      "**/tmp",

      "**/styled-system",
      "**/panda.config.ts",

      "**/tsconfig.json",
      "**/tsconfig.eslint.json",
      "**/eslint.config.js",
      "**/postcss.config.cjs",
      "**/vite.config.ts",
      "**/tsup.config.ts",

      "**/__snapshots__",
      "!.github",
      "!.vitepress",
      "!.vscode",
      "**/.eslintrc*.*",

      "*.min.*",
      "*.d.ts",
    ]
  },

  ...arrayRules,
  ...commentRules,
  ...eslintRules,
  ...importRules,
  ...noConstructorBindRules,
  ...noUnsanitizedRules,
  ...noUseExtendNativeRules,
  ...perfectionistRules,
  ...promiseRules,
  ...regexpRules,
  ...sdlRules,
  ...securityRules,
  ...shopifyRules,
  ...simpleImportSortRules,
  ...sortClassMembers,
  ...sonarRules,
  ...sonarjsRules,
  ...unicornRules,
  ...unusedImportsRules,

  ...typescript,
  ...commonjs,
  ...javascript,
  ...json,
  ...html,
  ...test,
  ...toml,
  ...yaml,
] satisfies FlatConfigItem;
