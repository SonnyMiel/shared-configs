import type { FlatConfigItem } from "../types";

export default [{
  name: "rules/unused-imports",
  rules: {
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "caughtErrors": "all",
        "varsIgnorePattern": "^ignore$",
        "argsIgnorePattern": "^ignore$"
      }
    ],
  }
}] satisfies FlatConfigItem;
