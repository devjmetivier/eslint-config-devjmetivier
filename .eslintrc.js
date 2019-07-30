module.exports = {
  "parser": "@typescript-eslint/parser",

  "extends": [
    "plugin:prettier/recommended",
    "prettier/react"
  ],

  "plugins": [
    "jsx-a11y",
    "react",
    "react-hooks"
  ],

  "rules": {
    // prettier
    "prettier/prettier": [
      "error", 
      {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 120,
        "jsxSingleQuote": true
      }, 
      {
        "usePrettierrc": false
      }
    ],
    // react
    "react/display-name": ["error", { "ignoreTranspilerName": false }],
    "react/forbid-component-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-prop-types": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-handler-names": "error",
    "react/jsx-key": "error",
    "react/jsx-no-bind": "off",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-sort-props": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "off",
    "react/no-danger": "off",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "off",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "off",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "off",
    "react/require-optimization": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "off",
    "react/sort-prop-types": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/default-props-match-prop-types": "error",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-curly-brace-presence": [
      "warn",
      { "props": "never", "children": "ignore" },
    ],
    "react/jsx-curly-newline" : [ 
      "error", 
      { "multiline": "consistent", "singleline": "consistent" },
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unsafe": "warn",
    "react/no-unused-state": "error",
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-dom-props": "off",
    "react/jsx-max-depth": "off",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-sort-default-props": "error",
    "react/jsx-fragments": [2, "syntax"],
    "react/jsx-props-no-spreading": [
      "off",
      { "html": "ignore", "custom": "ignore" },
    ],
    "react/state-in-constructor": ["off", "always"],
    "react/prefer-read-only-props": "off",
    "react/static-property-placement": ["warn"],
    // react-jsx-a11y
    "jsx-a11y/accessible-emoji": "error",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "warn",
    "jsx-a11y/label-has-for": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": "warn",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "warn",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "error",
    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "browser": true,
    "node": true
  },

  "settings": {
    "react": {
      "version": "detect"
    }
  },
}
