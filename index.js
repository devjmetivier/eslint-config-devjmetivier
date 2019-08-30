module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    './rules/prettier.js',
    './rules/react.js',
    './rules/jsx-a11y.js',
    './rules/react-hooks.js',
    './rules/options.js',
  ],
};
