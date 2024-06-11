import type { FlatConfigItem } from "../types.js";
import globals from "globals";

export default [{
  name: "overrides/javascript",
  files: ["**/*.cjs", "**/*.cts"],

  languageOptions: {
    sourceType: "commonjs",
    globals: {
      ...globals.commonjs,
    }
  },

  rules: {
    "import/no-commonjs": "off",
    "import/unambiguous": "off",
    "unicorn/prefer-module": "off",
  }
}] satisfies FlatConfigItem;
