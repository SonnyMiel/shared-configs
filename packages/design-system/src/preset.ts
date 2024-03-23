import { definePreset } from "@pandacss/dev";

export default definePreset({
  presets: ["@pandacss/preset-base", "@pandacss/dev/presets", "@park-ui/panda-preset"],
  theme: {
    extend: {
      tokens: {
        colors: {
        },
      },
    },
    recipes: {
    },
  },
});
