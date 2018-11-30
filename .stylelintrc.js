module.exports = {
  "extends": ["stylelint-config-airbnb", "stylelint-config-recommended-scss"],
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    // stylelint-config-recommended-scss
    "at-rule-empty-line-before": [
      "always", {
        "except": ["after-same-name"],
        "ignoreAtRules": [ "else" ]
      },
    ],
    "block-opening-brace-space-before": "always",
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": [ "if", "else" ]
      }
    ],
    "at-rule-name-space-after": "always",
    "rule-empty-line-before": "always",
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/dollar-variable-pattern": /^--[a-zA-Z]/,

    // stylelint-config-standard
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-comma-newline-after": null,
    "function-name-case": null,
    "function-parentheses-newline-inside": null,
    "function-max-empty-lines": null,
    "function-whitespace-after": null,
    "indentation": null,
    "number-leading-zero": null,
    "number-no-trailing-zeros": null,
    "rule-empty-line-before": null,
    "selector-combinator-space-after": null,
    "selector-list-comma-newline-after": null,
    "selector-pseudo-element-colon-notation": null,
    "unit-no-unknown": null,
    "value-list-max-empty-lines": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "string-quotes": "single"
  }
};
