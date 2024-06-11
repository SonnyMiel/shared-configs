import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/simple-import",
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
}] satisfies FlatConfigItem;
