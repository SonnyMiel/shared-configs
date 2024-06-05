import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/comment",
  plugins: {
  },
  rules: {
    "eslint-comments/disable-enable-pair": [
      "error",
      { "allowWholeFile": true }
    ],
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/no-use": [
      "error",
      {
        "allow": [
          "eslint-disable",
          "eslint-disable-next-line",
          "eslint-enable",
          "eslint-env",
          "global"
        ]
      }
    ],
  }
}] satisfies FlatConfigItem;
