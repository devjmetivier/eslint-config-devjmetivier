module.exports = {
  "extends": ["plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"],

  "parser": "@typescript-eslint/parser",

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },

  "plugins": ["react-hooks", "jsx-a11y", "react"],

  "rules": {
    "accessor-pairs": 0,
    "array-bracket-newline": [0, "consistent"],
    "array-bracket-spacing": [2, "never"],
    "array-callback-return": [
      2,
      {
        "allowImplicit": true
      }
    ],
    "array-element-newline": [
      0,
      {
        "minItems": 3,
        "multiline": true
      }
    ],
    "arrow-body-style": [
      2,
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "arrow-parens": [
      2,
      "as-needed",
      {
        "requireForBlockBody": true
      }
    ],
    "arrow-spacing": [
      2,
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": 2,
    "block-spacing": [2, "always"],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "callback-return": 0,
    "camelcase": [
      2,
      {
        "properties": "never"
      }
    ],
    "capitalized-comments": [
      0,
      "never",
      {
        "block": {
          "ignoreConsecutiveComments": true,
          "ignoreInlineComments": true,
          "ignorePattern": ".*"
        },
        "line": {
          "ignoreConsecutiveComments": true,
          "ignoreInlineComments": true,
          "ignorePattern": ".*"
        }
      }
    ],
    "class-methods-use-this": [
      2,
      {
        "exceptMethods": [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidCatch",
          "getSnapshotBeforeUpdate"
        ]
      }
    ],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      2,
      "last",
      {
        "exceptions": {
          "ArrayExpression": false,
          "ArrayPattern": false,
          "ArrowFunctionExpression": false,
          "CallExpression": false,
          "FunctionDeclaration": false,
          "FunctionExpression": false,
          "ImportDeclaration": false,
          "NewExpression": false,
          "ObjectExpression": false,
          "ObjectPattern": false,
          "VariableDeclaration": false
        }
      }
    ],
    "complexity": [0, 11],
    "computed-property-spacing": [2, "never"],
    "consistent-return": 2,
    "consistent-this": 0,
    "constructor-super": 2,
    "curly": [2, "multi-line"],
    "default-case": [
      2,
      {
        "commentPattern": "^no default$"
      }
    ],
    "dot-location": [2, "property"],
    "dot-notation": [
      2,
      {
        "allowKeywords": true
      }
    ],
    "eol-last": [2, "always"],
    "eqeqeq": [
      2,
      "always",
      {
        "null": "ignore"
      }
    ],
    "for-direction": 2,
    "func-call-spacing": [2, "never"],
    "func-name-matching": [
      0,
      "always",
      {
        "includeCommonJSModuleExports": false
      }
    ],
    "func-names": 1,
    "func-style": [0, "expression"],
    "function-paren-newline": [2, "consistent"],
    "generator-star-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "getter-return": [
      2,
      {
        "allowImplicit": true
      }
    ],
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": 0,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "implicit-arrow-linebreak": [2, "beside"],
    "import/prefer-default-export": 0,
    "indent": [
      2,
      2,
      {
        "ArrayExpression": 1,
        "CallExpression": {
          "arguments": 1
        },
        "FunctionDeclaration": {
          "body": 1,
          "parameters": 1
        },
        "FunctionExpression": {
          "body": 1,
          "parameters": 1
        },
        "ImportDeclaration": 1,
        "ObjectExpression": 1,
        "SwitchCase": 1,
        "VariableDeclarator": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false,
        "ignoredNodes": [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild"
        ],
        "outerIIFEBody": 1
      }
    ],
    "init-declarations": 0,
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/alt-text": [
      2,
      {
        "area": [],
        "elements": ["img", "object", "area", "input[type='image']"],
        "img": [],
        "input[type='image']": [],
        "object": []
      }
    ],
    "jsx-a11y/anchor-has-content": [
      2,
      {
        "components": []
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      1,
      {
        "aspects": ["invalidHref"]
      }
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": 2,
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/aria-proptypes": 2,
    "jsx-a11y/aria-role": [
      2,
      {
        "ignoreNonDom": false
      }
    ],
    "jsx-a11y/aria-unsupported-elements": 2,
    "jsx-a11y/click-events-have-key-events": 2,
    "jsx-a11y/control-has-associated-label": [
      0,
      {
        "controlComponents": [],
        "depth": 5,
        "ignoreElements": ["audio", "canvas", "embed", "input", "textarea", "tr", "video"],
        "ignoreRoles": [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid"
        ],
        "labelAttributes": ["label"]
      }
    ],
    "jsx-a11y/heading-has-content": [
      2,
      {
        "components": [""]
      }
    ],
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/html-has-lang": 2,
    "jsx-a11y/iframe-has-title": 2,
    "jsx-a11y/img-redundant-alt": 2,
    "jsx-a11y/interactive-supports-focus": 2,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "assert": "both",
        "controlComponents": [],
        "depth": 25,
        "labelAttributes": [],
        "labelComponents": []
      }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        "allowChildren": false,
        "components": [],
        "required": {
          "every": ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/lang": 2,
    "jsx-a11y/media-has-caption": [
      2,
      {
        "audio": [],
        "track": [],
        "video": []
      }
    ],
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/no-access-key": 2,
    "jsx-a11y/no-autofocus": [
      2,
      {
        "ignoreNonDOM": true
      }
    ],
    "jsx-a11y/no-distracting-elements": [
      2,
      {
        "elements": ["marquee", "blink"]
      }
    ],
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      2,
      {
        "tr": ["none", "presentation"]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      2,
      {
        "handlers": ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
      }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      2,
      {
        "li": ["menuitem", "option", "row", "tab", "treeitem"],
        "ol": ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        "table": ["grid"],
        "td": ["gridcell"],
        "ul": ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"]
      }
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      2,
      {
        "roles": ["tabpanel"],
        "tags": []
      }
    ],
    "jsx-a11y/no-onchange": 0,
    "jsx-a11y/no-redundant-roles": 2,
    "jsx-a11y/no-static-element-interactions": [
      2,
      {
        "handlers": ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
      }
    ],
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "jsx-a11y/scope": 2,
    "jsx-a11y/tabindex-no-positive": 2,
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [
      2,
      {
        "afterColon": true,
        "beforeColon": false
      }
    ],
    "keyword-spacing": [
      2,
      {
        "after": true,
        "before": true,
        "overrides": {
          "case": {
            "after": true
          },
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          }
        }
      }
    ],
    "line-comment-position": [
      0,
      {
        "applyDefaultPatterns": true,
        "ignorePattern": "",
        "position": "above"
      }
    ],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "lines-around-directive": [
      2,
      {
        "after": "always",
        "before": "always"
      }
    ],
    "lines-between-class-members": [
      2,
      "always",
      {
        "exceptAfterSingleLine": false
      }
    ],
    "max-classes-per-file": [0, 1],
    "max-depth": [0, 4],
    "max-len": [
      2,
      150,
      4,
      {
        "ignoreUrls": true
      }
    ],
    "max-lines": [
      0,
      {
        "max": 300,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-lines-per-function": [
      0,
      {
        "IIFEs": true,
        "max": 50,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-nested-callbacks": 0,
    "max-params": [0, 3],
    "max-statements": [0, 10],
    "max-statements-per-line": [
      0,
      {
        "max": 1
      }
    ],
    "multiline-comment-style": [0, "starred-block"],
    "multiline-ternary": [0, "never"],
    "new-cap": [
      2,
      {
        "capIsNew": false,
        "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],
        "newIsCap": true,
        "newIsCapExceptions": []
      }
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 4
      }
    ],
    "no-alert": 1,
    "no-array-constructor": 2,
    "no-async-promise-executor": 0,
    "no-await-in-loop": 2,
    "no-bitwise": 2,
    "no-buffer-constructor": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 0,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [2, "always"],
    "no-confusing-arrow": [
      2,
      {
        "allowParens": true
      }
    ],
    "no-console": 1,
    "no-const-assign": 2,
    "no-constant-condition": 1,
    "no-continue": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 0,
    "no-else-return": [
      2,
      {
        "allowElseIf": false
      }
    ],
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-function": [
      2,
      {
        "allow": ["arrowFunctions", "functions", "methods"]
      }
    ],
    "no-empty-pattern": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-label": 2,
    "no-extra-parens": [
      0,
      "all",
      {
        "conditionalAssign": true,
        "enforceForArrowConditionals": false,
        "ignoreJSX": "all",
        "nestedBinaryExpressions": false,
        "returnAssign": false
      }
    ],
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-global-assign": [
      2,
      {
        "exceptions": []
      }
    ],
    "no-implicit-coercion": [
      0,
      {
        "allow": [],
        "boolean": false,
        "number": true,
        "string": true
      }
    ],
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": [
      2,
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [
      0,
      {
        "detectObjects": false,
        "enforceConst": true,
        "ignore": [],
        "ignoreArrayIndexes": true
      }
    ],
    "no-misleading-character-class": 0,
    "no-mixed-operators": [
      2,
      {
        "allowSamePrecedence": false,
        "groups": [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["**", "+"],
          ["**", "-"],
          ["**", "*"],
          ["**", "/"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ]
      }
    ],
    "no-mixed-requires": [0, false],
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-assign": [2],
    "no-multi-spaces": [
      2,
      {
        "ignoreEOLComments": false
      }
    ],
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2,
        "maxEOF": 0
      }
    ],
    "no-native-reassign": 0,
    "no-negated-condition": 0,
    "no-negated-in-lhs": 0,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-path-concat": 2,
    "no-plusplus": 2,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-imports": [
      0,
      {
        "paths": [],
        "patterns": []
      }
    ],
    "no-restricted-modules": 0,
    "no-restricted-properties": [
      2,
      {
        "message": "arguments.callee is deprecated",
        "object": "arguments",
        "property": "callee"
      },
      {
        "message": "Please use Number.isFinite instead",
        "object": "global",
        "property": "isFinite"
      },
      {
        "message": "Please use Number.isFinite instead",
        "object": "self",
        "property": "isFinite"
      },
      {
        "message": "Please use Number.isFinite instead",
        "object": "window",
        "property": "isFinite"
      },
      {
        "message": "Please use Number.isNaN instead",
        "object": "global",
        "property": "isNaN"
      },
      {
        "message": "Please use Number.isNaN instead",
        "object": "self",
        "property": "isNaN"
      },
      {
        "message": "Please use Number.isNaN instead",
        "object": "window",
        "property": "isNaN"
      },
      {
        "message": "Please use Object.defineProperty instead.",
        "property": "__defineGetter__"
      },
      {
        "message": "Please use Object.defineProperty instead.",
        "property": "__defineSetter__"
      },
      {
        "message": "Use the exponentiation operator (**) instead.",
        "object": "Math",
        "property": "pow"
      }
    ],
    "no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
    "no-return-assign": [2, "except-parens"],
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [
      2,
      {
        "props": false
      }
    ],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": [
      2,
      {
        "ignoreComments": false,
        "skipBlankLines": false
      }
    ],
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": [
      2,
      {
        "allow": [],
        "allowAfterSuper": false,
        "allowAfterThis": false,
        "enforceInMethodNames": true
      }
    ],
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 0,
    "no-unneeded-ternary": [
      2,
      {
        "defaultAssignment": false
      }
    ],
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "no-unused-labels": 2,
    "no-unused-vars": [
      2,
      {
        "argsIgnorePattern": "res|next|^err",
        "ignoreRestSiblings": true
      }
    ],
    "no-use-before-define": [
      2,
      {
        "classes": true,
        "functions": true,
        "variables": true
      }
    ],
    "no-useless-call": 0,
    "no-useless-catch": 0,
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-useless-rename": [
      2,
      {
        "ignoreDestructuring": false,
        "ignoreExport": false,
        "ignoreImport": false
      }
    ],
    "no-useless-return": 2,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": [
      0,
      {
        "location": "start",
        "terms": ["todo", "fixme", "xxx"]
      }
    ],
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "nonblock-statement-body-position": [
      2,
      "beside",
      {
        "overrides": {}
      }
    ],
    "object-curly-newline": [
      2,
      {
        "ExportDeclaration": {
          "consistent": true,
          "minProperties": 4,
          "multiline": true
        },
        "ImportDeclaration": {
          "consistent": true,
          "minProperties": 4,
          "multiline": true
        },
        "ObjectExpression": {
          "consistent": true,
          "minProperties": 4,
          "multiline": true
        },
        "ObjectPattern": {
          "consistent": true,
          "minProperties": 4,
          "multiline": true
        }
      }
    ],
    "object-curly-spacing": [2, "always"],
    "object-property-newline": [
      2,
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "object-shorthand": [
      2,
      "always",
      {
        "avoidQuotes": true,
        "ignoreConstructors": false
      }
    ],
    "one-var": [2, "never"],
    "one-var-declaration-per-line": [2, "always"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [
      2,
      "before",
      {
        "overrides": {
          "=": "none"
        }
      }
    ],
    "padded-blocks": [
      2,
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      }
    ],
    "padding-line-between-statements": 0,
    "prefer-arrow-callback": [
      2,
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      2,
      {
        "destructuring": "all"
      }
    ],
    "prefer-destructuring": 2,
    "prefer-named-capture-group": 0,
    "prefer-numeric-literals": 2,
    "prefer-object-spread": 0,
    "prefer-promise-reject-errors": [
      2,
      {
        "allowEmptyReject": true
      }
    ],
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "prettier/prettier": [
      2,
      {
        "jsxSingleQuote": true,
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "quote-props": [
      2,
      "as-needed",
      {
        "keywords": false,
        "numbers": false,
        "unnecessary": true
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "radix": 2,
    "react-hooks/exhaustive-deps": 1,
    "react-hooks/rules-of-hooks": 2,
    "react/boolean-prop-naming": [
      0,
      {
        "message": "",
        "propTypeNames": ["bool", "mutuallyExclusiveTrueProps"],
        "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+"
      }
    ],
    "react/button-has-type": [
      2,
      {
        "button": true,
        "reset": false,
        "submit": true
      }
    ],
    "react/default-props-match-prop-types": [
      2,
      {
        "allowRequiredDefaults": false
      }
    ],
    "react/destructuring-assignment": [2, "always"],
    "react/display-name": [
      0,
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/forbid-component-props": [
      0,
      {
        "forbid": []
      }
    ],
    "react/forbid-dom-props": [
      0,
      {
        "forbid": []
      }
    ],
    "react/forbid-elements": [
      0,
      {
        "forbid": []
      }
    ],
    "react/forbid-foreign-prop-types": [
      1,
      {
        "allowInPropTypes": true
      }
    ],
    "react/forbid-prop-types": [
      2,
      {
        "checkChildContextTypes": true,
        "checkContextTypes": true,
        "forbid": ["any", "array", "object"]
      }
    ],
    "react/jsx-boolean-value": [
      2,
      "never",
      {
        "always": []
      }
    ],
    "react/jsx-child-element-spacing": 0,
    "react/jsx-closing-bracket-location": [2, "line-aligned"],
    "react/jsx-closing-tag-location": 2,
    "react/jsx-curly-brace-presence": [
      2,
      {
        "children": "never",
        "props": "never"
      }
    ],
    "react/jsx-curly-newline": [
      0,
      {
        "multiline": "consistent",
        "single": "consistent"
      }
    ],
    "react/jsx-curly-spacing": [
      2,
      "never",
      {
        "allowMultiline": true
      }
    ],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-fragments": [0, "syntax"],
    "react/jsx-handler-names": [
      0,
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 0,
    "react/jsx-max-depth": 0,
    "react/jsx-max-props-per-line": [
      2,
      {
        "maximum": 1,
        "when": "multiline"
      }
    ],
    "react/jsx-no-bind": [
      2,
      {
        "allowArrowFunctions": true,
        "allowBind": false,
        "allowFunctions": false,
        "ignoreDOMComponents": true,
        "ignoreRefs": true
      }
    ],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": [
      2,
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-no-literals": [
      0,
      {
        "noStrings": true
      }
    ],
    "react/jsx-no-target-blank": [
      2,
      {
        "enforceDynamicLinks": "always"
      }
    ],
    "react/jsx-no-undef": 2,
    "react/jsx-one-expression-per-line": [
      2,
      {
        "allow": "single-child"
      }
    ],
    "react/jsx-pascal-case": [
      2,
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-props-no-multi-spaces": 2,
    "react/jsx-props-no-spreading": [
      0,
      {
        "custom": "enforce",
        "exceptions": [],
        "html": "enforce"
      }
    ],
    "react/jsx-sort-default-props": [
      0,
      {
        "ignoreCase": true
      }
    ],
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": [
      0,
      {
        "callbacksLast": false,
        "ignoreCase": true,
        "noSortAlphabetically": false,
        "reservedFirst": true,
        "shorthandFirst": false,
        "shorthandLast": false
      }
    ],
    "react/jsx-space-before-closing": [0, "always"],
    "react/jsx-tag-spacing": [
      2,
      {
        "afterOpening": "never",
        "beforeClosing": "never",
        "beforeSelfClosing": "always",
        "closingSlash": "never"
      }
    ],
    "react/jsx-uses-react": [2],
    "react/jsx-uses-vars": 2,
    "react/jsx-wrap-multilines": [
      2,
      {
        "arrow": "parens-new-line",
        "assignment": "parens-new-line",
        "condition": "parens-new-line",
        "declaration": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line",
        "return": "parens-new-line"
      }
    ],
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 2,
    "react/no-children-prop": 2,
    "react/no-danger": 1,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": [2],
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 0,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 0,
    "react/no-redundant-should-component-update": 2,
    "react/no-render-return-value": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unknown-property": 2,
    "react/no-unsafe": 0,
    "react/no-unused-prop-types": [
      2,
      {
        "customValidators": [],
        "skipShapeProps": true
      }
    ],
    "react/no-unused-state": 2,
    "react/no-will-update-set-state": 2,
    "react/prefer-es6-class": [2, "always"],
    "react/prefer-read-only-props": 0,
    "react/prefer-stateless-function": [
      2,
      {
        "ignorePureComponents": true
      }
    ],
    "react/prop-types": [
      2,
      {
        "customValidators": [],
        "ignore": [],
        "skipUndeclared": false
      }
    ],
    "react/react-in-jsx-scope": 2,
    "react/require-default-props": [
      2,
      {
        "forbidDefaultForRequired": true
      }
    ],
    "react/require-optimization": [
      0,
      {
        "allowDecorators": []
      }
    ],
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": [
      2,
      {
        "groups": {
          "lifecycle": [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "getInitialState",
            "state",
            "getChildContext",
            "componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "componentDidUpdate",
            "componentWillUnmount"
          ],
          "rendering": ["/^render.+$/", "render"]
        },
        "order": [
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "rendering"
        ]
      }
    ],
    "react/sort-prop-types": [
      0,
      {
        "callbacksLast": false,
        "ignoreCase": true,
        "requiredFirst": false,
        "sortShapeProp": true
      }
    ],
    "react/state-in-constructor": [0, "never"],
    "react/static-property-placement": [0, "property assignment"],
    "react/style-prop-object": 2,
    "react/void-dom-elements-no-children": 2,
    "require-atomic-updates": 0,
    "require-await": 0,
    "require-jsdoc": 0,
    "require-unicode-regexp": 0,
    "require-yield": 2,
    "rest-spread-spacing": [2, "never"],
    "semi": [2, "always"],
    "semi-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "semi-style": [2, "last"],
    "sort-imports": [
      0,
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ],
    "sort-keys": [
      0,
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "nonwords": false,
        "overrides": {},
        "words": true
      }
    ],
    "spaced-comment": [
      2,
      "always",
      {
        "block": {
          "balanced": true,
          "exceptions": ["-", "+"],
          "markers": ["=", "!"]
        },
        "line": {
          "exceptions": ["-", "+"],
          "markers": ["=", "!"]
        }
      }
    ],
    "strict": [2, "never"],
    "switch-colon-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "symbol-description": 2,
    "template-curly-spacing": 2,
    "template-tag-spacing": [2, "never"],
    "unicode-bom": [2, "never"],
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": [
      2,
      {
        "requireStringLiterals": true
      }
    ],
    "vars-on-top": 2,
    "wrap-iife": [
      2,
      "outside",
      {
        "functionPrototypeMethods": false
      }
    ],
    "wrap-regex": 0,
    "yield-star-spacing": [2, "after"],
    "yoda": 2
  },

  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
