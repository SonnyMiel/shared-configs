import type { FlatConfigItem } from "../types.js";

export default [{
  name: "overrides/test",
  files: [
    "**/test/**",
    "**/tests/**",
    "**/spec/**",
    "**/__tests__/**",
    "**/*.test.*",
    "**/*.spec.*",
    "**/*.e2e.*",
    "**/*.e2e-spec.*"
  ],

  rules: {
    "max-statements": ["error", 15],

    "no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "allow": [
          "defaultStatus",
          "event",
          "find",
          "length",
          "name",
          "status",
          "screen"
        ]
      }
    ],

    "no-only-tests/no-only-tests": "error",

    "sonar/stable-tests": "error",

    "no-magic-numbers": "off",
    "max-classes-per-file": "off",

    "sonarjs/no-identical-functions": "off"
  }
}] satisfies FlatConfigItem;

