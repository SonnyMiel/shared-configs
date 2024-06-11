import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/typescript",
  rules: {
    "@shopify/typescript/prefer-singular-enums": "error",

    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/class-methods-use-this": "off",
    "@typescript-eslint/consistent-indexed-object-style": [
      "error",
      "index-signature"
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { "assertionStyle": "never" }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-array-delete": "off",
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      { "checkNever": true }
    ],
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        "ignore": [0, 1],
        "enforceConst": true,
        "ignoreDefaultValues": true,
        "ignoreClassFieldInitialValues": true,
        "ignoreEnums": true,
        "ignoreNumericLiteralTypes": true,
        "ignoreReadonlyClassProperties": true,
        "ignoreTypeIndexes": true
      }
    ],
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "builtinGlobals": true,
        "allow": [
          "defaultStatus",
          "event",
          "find",
          "length",
          "name",
          "status"
        ]
      }
    ],
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { "enforceForJSX": true }
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { "ignoreTypeReferences": false }
    ],
    "@typescript-eslint/prefer-destructuring": [
      "error",
      { "array": true, "object": true },
      {
        "enforceForRenamedProperties": true,
        "enforceForDeclarationWithTypeAnnotation": true
      }
    ],
    "@typescript-eslint/prefer-find": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": [
      "error",
      { "ignoreInferredTypes": true }
    ],
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error",
      { "requireDefaultForNonUnion": true }
    ],

    "etc/no-const-enum": "error",
    "etc/no-enum": "error",
    "etc/no-implicit-any-catch": "error",
    "etc/no-misused-generics": "error",
    "etc/no-t": "error",
    "etc/prefer-interface": ["error", { "allowIntersection": false }],

    "import/extensions": ["error", "never"],
    "import/max-dependencies": ["error", { "ignoreTypeImports": true }],
    "import/no-unused-modules": [
      "error",
      { "missingExports": false, "unusedExports": true }
    ],

    "no-explicit-type-exports/no-explicit-type-exports": "error",

    "prefer-destructuring": "off",

    "sonar/public-static-readonly": "error",

    "total-functions/no-nested-fp-ts-effects": "error",
    "total-functions/no-partial-array-reduce": "error",
    "total-functions/no-partial-division": "error",
    "total-functions/no-partial-string-normalize": "error",
    "total-functions/no-partial-url-constructor": "error",
    "total-functions/no-premature-fp-ts-effects": "error",
    "total-functions/no-unsafe-readonly-mutable-assignment": "error",
    "total-functions/require-strict-mode": "error"
  },
}] satisfies FlatConfigItem;
