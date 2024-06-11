import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/import",
  rules: {
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-cycle": ["error", { commonjs: true }],
    "import/no-deprecated": "error",
    "import/no-dynamic-require": "error",
    "import/no-empty-named-blocks": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: false, optionalDependencies: false, peerDependencies: false, includeTypes: true }],
    "import/no-import-module-exports": "error",
    "import/no-internal-modules": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-nodejs-modules": "error",
    "import/no-relative-packages": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-restricted-paths": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": ["error", { commonjs: true, caseSensitiveStrict: true }],
    // https://github.com/import-js/eslint-plugin-import/issues/2964
    "import/no-unused-modules": ["off", {
      // missingExports: true,
      // unusedExports: false,
      // ignoreExports: ["index.css", "**/*.scss", "**/*.svg", "**/*.json"],
    }],
    "import/no-useless-path-segments": ["error", { commonjs: true }],
    "import/no-webpack-loader-syntax": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "orderImportKind": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/unambiguous": "error",
  }
}] satisfies FlatConfigItem;
