/// <reference types="@eslint-types/typescript-eslint" />
//
import config from "@sonnymiel/eslint-config";

// console.log(config.node)

export default [
  ...config.base,
  // ...config.node,
  ...config.react,
  ...config.stylistic,
];
