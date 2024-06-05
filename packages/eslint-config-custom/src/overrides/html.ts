import htmlParser from "@html-eslint/parser";

import type { FlatConfigItem } from "../types.js";

export default [{
  name: "overrides/html",
  files: ["**/*.htm", "**/*.html"],

  languageOptions: {
    parser: htmlParser,
  },

  rules: {
    "@html-eslint/require-doctype": "error",
    "@html-eslint/no-duplicate-id": "error",
    "@html-eslint/no-inline-styles": "error",
    "@html-eslint/require-li-container": "error",
    "@html-eslint/no-obsolete-tags": "error",
    "@html-eslint/require-lang": "error",
    "@html-eslint/require-title": "error",
    "@html-eslint/no-multiple-h1": "error",
    "@html-eslint/require-meta-description": "error",
    "@html-eslint/require-img-alt": "error",
    "@html-eslint/no-skip-heading-levels": "error",
    "@html-eslint/require-frame-title": "error",
    "@html-eslint/no-non-scalable-viewport": "error",
    "@html-eslint/no-positive-tabindex": "error",
    "@html-eslint/require-meta-viewport": "error",
    "@html-eslint/no-duplicate-attrs": "error",
    "@html-eslint/no-target-blank": "error",
    "@html-eslint/require-button-type": "error",
    "@html-eslint/no-abstract-roles": "error",
    "@html-eslint/no-aria-hidden-body": "error",
    "@html-eslint/no-accesskey-attrs": "error",

    "@html-eslint/sort-attrs": ["error", { "priority": [] }],

    "spaced-comment": "off",
    "no-inline-comments": "off",
    "import/unambiguous": "off",
  }
}] satisfies FlatConfigItem;
