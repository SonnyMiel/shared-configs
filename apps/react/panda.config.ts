import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@template/design-system"],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "../../packages/design-system/src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@template/design-system/src/**/*.{js,jsx,ts,tsx}"
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  emitPackage: true,
});
