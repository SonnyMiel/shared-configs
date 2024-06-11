import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/shopify",
  rules: {
    "@shopify/no-useless-computed-properties": "error",
  },
}] satisfies FlatConfigItem;
