import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";

import importPlugin from "eslint-plugin-import";
import shopify from "@shopify/eslint-plugin";
import * as sonar from "eslint-plugin-sonar";

import reactAll from "eslint-plugin-react/configs/all.js";
import reactUseMemo from "@arthurgeron/eslint-plugin-react-usememo";
import validateJsxNesting from "eslint-plugin-validate-jsx-nesting";
import reactHook from "eslint-plugin-react-hooks";
import reactHookForm from "eslint-plugin-react-hook-form";
import reactFormFields from "eslint-plugin-react-form-fields";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPerf from "eslint-plugin-react-perf";

import reactRules from "./rules/react.js";

/// <reference types="@eslint-types/typescript-eslint" />

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactAll,
  },

  {
    name: "configs/react",
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],

    plugins: {
      import: fixupPluginRules(importPlugin),
      "@shopify": shopify,
      "validate-jsx-nesting": validateJsxNesting,
      sonar: fixupPluginRules(sonar),
      "react-hooks": reactHook,
      "@arthurgeron/react-usememo": reactUseMemo,
      "jsx-a11y": jsxA11y,
      "react-hook-form": reactHookForm,
      "react-form-fields": reactFormFields,
      "react-perf": fixupPluginRules(reactPerf),
    },

    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

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
      },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },

    rules: {
      ...reactHook.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...reactHookForm.configs.recommended.rules,
      ...reactFormFields.configs.recommended.rules,
      ...reactPerf.configs.all.rules,

      // disable import for react
      "import/no-internal-modules": "off",
      "import/no-absolute-path": "off",

      "@typescript-eslint/naming-convention": "off",
    },
  },

  ...reactRules,
];
