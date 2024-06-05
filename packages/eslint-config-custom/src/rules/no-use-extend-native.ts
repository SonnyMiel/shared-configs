import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/extend-native",
  rules: {
    "no-use-extend-native/no-use-extend-native": "error",
  }
}] satisfies FlatConfigItem;
