import yaml from "eslint-plugin-yml";
import yamlParser from "yaml-eslint-parser";

import type { FlatConfigItem } from "../types";

export default [
  ...yaml.configs["flat/standard"],
  {
    name: "overrides/yaml",
    files: ["**/*.yaml", "**/*.yml"],

    languageOptions: {
      parser: yamlParser
    },

    rules: {
      'yml/block-mapping': 'error',
      'yml/block-sequence': 'error',
      'yml/no-empty-key': 'error',
      'yml/no-empty-sequence-entry': 'error',
      'yml/no-irregular-whitespace': 'error',
      'yml/plain-scalar': 'error',
      'yml/vue-custom-block/no-parsing-error': 'error',

      "import/unambiguous": "off",
    }
  },
] satisfies FlatConfigItem;
