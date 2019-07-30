module.exports = {
  "parser": "@typescript-eslint/parser",

  "extends": [
    "plugin:prettier/recommended"
  ],

  "plugins": [
    "react-hooks"
  ],

  "rules": {
    "prettier/prettier": [
      "error", 
      {
        "singleQuote": true,
        "trailingComma": "all",
        "printWidth": 120,
        "jsxSingleQuote": true,
      }, 
      {
        "usePrettierrc": false
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
  },

  "env": {
    "browser": true,
    "node": true,
  },

  "settings": {
    "react": {
      "version": "detect"
    }
  },
}
