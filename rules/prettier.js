module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        jsxSingleQuote: true,
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
