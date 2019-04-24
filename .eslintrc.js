module.exports = {
  extends: [ "airbnb", "prettier", "prettier/react" ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    // Can I remove these now?
    ecmaFeatures: {
      impliedStrict: true,
      classes: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
    node: true
  },
  rules: {
    "comma-dangle": [ "error", "always-multiline" ],
    "import/prefer-default-export": 0,
    "jsx-a11y/accessible-emoji": 0,
    "jsx-a11y/anchor-is-valid": [ "warn", { aspects: [ "invalidHref" ] } ],
    "jsx-a11y/href-no-hash": "off",
    "jsx-quotes": [ "error", "prefer-single" ],
    "max-len": [ 2, 150, 4, { ignoreUrls: true } ],
    "no-param-reassign": [ 2, { props: false } ],
    "no-restricted-syntax": [ 2, "ForInStatement", "LabeledStatement", "WithStatement" ],
    "no-return-assign": [ "error", "except-parens" ],
    "no-unused-expressions": [ 2, { allowTaggedTemplates: true } ],
    "no-unused-vars": [ 2, { ignoreRestSiblings: true, argsIgnorePattern: "res|next|^err" } ],
    "prefer-const": [ "error", { destructuring: "all" } ],
    "prettier/prettier": [ "error", { trailingComma: "es5", singleQuote: true, jsxSingleQuote: true, printWidth: 80 } ],
    "quotes": [ 2, "single", { avoidEscape: true, allowTemplateLiterals: true } ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-filename-extension": [ 2, { extensions: [ ".js", ".jsx" ] } ],
    "react/jsx-indent": [ "error", 2 ],
    "react/require-default-props": 0,
  },
  plugins: [ "html", "prettier", "react-hooks" ]
};
