import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/sdl",
  rules: {
    "@microsoft/sdl/no-cookies": "error",
    "@microsoft/sdl/no-document-domain": "error",
    "@microsoft/sdl/no-html-method": "error",
    "@microsoft/sdl/no-insecure-url": "error",
    "@microsoft/sdl/no-postmessage-star-origin": "error",
  }
}] satisfies FlatConfigItem;
