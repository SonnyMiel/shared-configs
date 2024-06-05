/// <reference types="@eslint-types/typescript-eslint" />
//
import config from "@template/eslint-config-custom";

// console.log(config.node)

export default [
  ...config.base,
  // ...config.node,
  ...config.react,
  ...config.stylistic,
];
