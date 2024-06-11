import type { FlatConfigItem } from "../types.js";

export default [{
  name: "overrides/javascript",
  files: ["**/*.js", "**/*.jsx"],

  rules: {
    "constructor-super": "error",
    "getter-return": "error",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-func-assign": "error",
    "no-obj-calls": "error",
    "no-setter-return": "error",
    "no-this-before-super": "error",
    "no-undef": ["error", { "typeof": true }],
    "no-unreachable": "error",
    "no-unsafe-negation": ["error", { "enforceForOrderingRelations": true }],
  },
}] satisfies FlatConfigItem;
