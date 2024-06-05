import type { FlatConfigItem } from "../types";

export default [{
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  name: "rules/react",
  rules: {
    "@shopify/jsx-prefer-fragment-wrappers": "error",
    "@shopify/react-hooks-strict-return": "error",
    "@shopify/react-no-multiple-render-methods": "error",

    "jsx-a11y/alt-text": ["error", { "img": ["Image", "Img"] }],
    "jsx-a11y/lang": "error",
    "jsx-a11y/mouse-events-have-key-events": [
      "error",
      {
        "hoverInHandlers": [
          "onMouseOver",
          "onMouseEnter",
          "onPointerOver",
          "onPointerEnter"
        ],
        "hoverOutHandlers": [
          "onMouseOut",
          "onMouseLeave",
          "onPointerOut",
          "onPointerLeave"
        ]
      }
    ],
    "jsx-a11y/no-aria-hidden-on-focusable": "error",
    "jsx-a11y/prefer-tag-over-role": "error",

    "react/boolean-prop-naming": [
      "error",
      {
        "rule": "^(is|has|are|can|should|did|will)[A-Z]([A-Za-z0-9])+",
        "validateNested": true
      }
    ],
    "react/checked-requires-onchange-or-readonly": "off",
    "react/destructuring-assignment": [
      "error",
      "always",
      { "destructureInSignature": "always" }
    ],
    "react/display-name": ["error", { "checkContextObjects": true }],
    "react/forbid-prop-types": [
      "error",
      { "checkContextTypes": true, "checkChildContextTypes": true }
    ],
    "react/jsx-curly-brace-presence": [
      "error",
      { "propElementValues": "always" }
    ],
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".jsx", ".tsx"] }
    ],
    "react/jsx-key": [
      "error",
      {
        "checkFragmentShorthand": true,
        "checkKeyMustBeforeSpread": true,
        "warnOnDuplicates": true
      }
    ],
    "react/jsx-max-depth": ["error", { "max": 10 }],
    "react/jsx-no-bind": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-leaked-render": ["error", { "validStrategies": ["coerce"] }],
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": ["error", { "includeFromSettings": true }],
    "react/jsx-no-target-blank": [
      "error",
      { "forms": true, "warnOnSpreadAttributes": true }
    ],
    "react/jsx-sort-props": "off",
    "react/no-object-type-as-default-prop": "error",
    "react/no-string-refs": ["error", { "noTemplateLiterals": true }],
    "react/no-unknown-property": ["error", { "requireDataLowercase": true }],
    "react/no-unsafe": ["error", { "checkAliases": true }],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": [
      "error",
      { "forbidDefaultForRequired": true, "functions": "defaultArguments" }
    ],
    "react/require-optimization": "error",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": ["error", "never"],
    "react/jsx-indent": ["error", 2, { checkAttributes: true }],
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],

    "react-form-fields/styled-no-mix-controlled-with-uncontrolled": "error",
    "react-form-fields/styled-no-only-value-prop": "error",
    "react-hooks/exhaustive-deps": "error",

    "sonar/no-hook-setter-in-body": "error",
    "sonar/no-useless-react-setstate": "error",

    "validate-jsx-nesting/no-invalid-jsx-nesting": "error",

    "@arthurgeron/react-usememo/require-usememo": "error"
  }
}] satisfies FlatConfigItem;
