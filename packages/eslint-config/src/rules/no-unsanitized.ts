import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/unsanitized",
  rules: {
    "no-unsanitized/method": "error",
    "no-unsanitized/property": "error",
  },
}] satisfies FlatConfigItem;
