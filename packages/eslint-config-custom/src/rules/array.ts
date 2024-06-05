import type { FlatConfigItem } from "../types.js";

export default [
  {
    name: "rules/array",
    rules: {
      "array-func/avoid-reverse": "error",
      "array-func/from-map": "error",
      "array-func/prefer-array-from": "error",
    },
  }
] satisfies FlatConfigItem;
