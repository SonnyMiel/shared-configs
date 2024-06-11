import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/perfectionist",
  rules: {
    "perfectionist/sort-array-includes": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-enums": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-interfaces": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-jsx-props": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-maps": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-objects": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
    "perfectionist/sort-object-types": [
      "error",
      { "type": "natural", "ignore-case": true }
    ],
  }
}] satisfies FlatConfigItem;

