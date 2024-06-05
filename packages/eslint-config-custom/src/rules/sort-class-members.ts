import type { FlatConfigItem } from "../types.js";

export default [{
  name: "rules/sort-class-members",
  rules: {
    "sort-class-members/sort-class-members": [
      "error",
      {
        "groups": {
          "static-arrow-function-properties": [
            {
              "static": true,
              "propertyType": "ArrowFunctionExpression",
              "sort": "alphabetical"
            }
          ],
          "static-async-methods": [
            {
              "static": true,
              "type": "method",
              "async": true,
              "sort": "alphabetical"
            }
          ],
          "static-accessor-pairs": [
            { "static": true, "accessorPair": true, "sort": "alphabetical" }
          ],
          "static-getters": [
            { "static": true, "kind": "get", "sort": "alphabetical" }
          ],
          "static-setters": [
            { "static": true, "kind": "set", "sort": "alphabetical" }
          ],
          "static-conventional-private-properties": [
            {
              "static": true,
              "type": "property",
              "name": "/_.+/",
              "sort": "alphabetical"
            }
          ],
          "static-conventional-private-methods": [
            {
              "static": true,
              "type": "method",
              "name": "/_.+/",
              "sort": "alphabetical"
            }
          ],
          "static-async-conventional-private-methods": [
            {
              "static": true,
              "type": "method",
              "name": "/_.+/",
              "async": true,
              "sort": "alphabetical"
            }
          ],
          "async-conventional-private-methods": [
            {
              "type": "method",
              "name": "/_.+/",
              "async": true,
              "sort": "alphabetical"
            }
          ]
        },
        "order": [
          "[static-properties]",
          "[static-arrow-function-properties]",
          "[static-accessor-pairs]",
          "[static-getters]",
          "[static-setters]",
          "[static-methods]",
          "[static-async-methods]",
          "[properties]",
          "[arrow-function-properties]",
          "constructor",
          "[accessor-pairs]",
          "[getters]",
          "[setters]",
          "[methods]",
          "[async-methods]",
          "[static-conventional-private-properties]",
          "[static-conventional-private-methods]",
          "[static-async-conventional-private-methods]",
          "[conventional-private-properties]",
          "[conventional-private-methods]",
          "[async-conventional-private-methods]"
        ],
        "accessorPairPositioning": "getThenSet"
      }
    ],
  }
}] satisfies FlatConfigItem;
