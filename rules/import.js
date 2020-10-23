const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['import'],
  rules: {
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
