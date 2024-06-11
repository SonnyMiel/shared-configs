import toml from "eslint-plugin-toml";
import tomlParser from "toml-eslint-parser";

import type { FlatConfigItem } from "../types.js";

export default [
  ...toml.configs["flat/standard"],
  {
    name: "overrides/toml",
    files: ["**/*.toml"],

    languageOptions: {
      parser: tomlParser
    },

    rules: {
      "toml/no-non-decimal-integer": "error",

      "toml/array-element-newline": "off",
      "toml/array-bracket-spacing": "off",

      "import/unambiguous": "off",
      "putout/putout": "off"
    }
  },
] satisfies FlatConfigItem;
