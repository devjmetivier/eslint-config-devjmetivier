/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],

  plugins: ['import'],

  rules: {
    'import/order': [
      ERROR,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
          },
          {
            pattern: 'react-dom',
            group: 'builtin',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
      },
    ],
  },
};
