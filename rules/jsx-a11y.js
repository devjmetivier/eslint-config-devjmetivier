/* eslint-disable @typescript-eslint/no-var-requires */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  plugins: ['jsx-a11y'],

  rules: {
    'jsx-a11y/accessible-emoji': ERROR,
    'jsx-a11y/alt-text': WARN,
    'jsx-a11y/anchor-has-content': ERROR,
    'jsx-a11y/anchor-is-valid': ERROR,
    'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
    'jsx-a11y/aria-props': ERROR,
    'jsx-a11y/aria-proptypes': ERROR,
    'jsx-a11y/aria-role': ERROR,
    'jsx-a11y/aria-unsupported-elements': ERROR,
    'jsx-a11y/click-events-have-key-events': ERROR,
    'jsx-a11y/heading-has-content': ERROR,
    'jsx-a11y/html-has-lang': ERROR,
    'jsx-a11y/iframe-has-title': ERROR,
    'jsx-a11y/img-redundant-alt': ERROR,
    'jsx-a11y/interactive-supports-focus': WARN,
    'jsx-a11y/label-has-for': [
      ERROR,
      {
        required: {
          every: ['id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/lang': ERROR,
    'jsx-a11y/media-has-caption': WARN,
    'jsx-a11y/mouse-events-have-key-events': ERROR,
    'jsx-a11y/no-access-key': ERROR,
    'jsx-a11y/no-autofocus': OFF,
    'jsx-a11y/no-distracting-elements': ERROR,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': WARN,
    'jsx-a11y/no-noninteractive-element-interactions': WARN,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': WARN,
    'jsx-a11y/no-noninteractive-tabindex': OFF,
    'jsx-a11y/no-onchange': OFF,
    'jsx-a11y/no-redundant-roles': ERROR,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/role-has-required-aria-props': ERROR,
    'jsx-a11y/role-supports-aria-props': ERROR,
    'jsx-a11y/scope': ERROR,
    'jsx-a11y/tabindex-no-positive': WARN,
    'jsx-a11y/label-has-associated-control': OFF,
    'jsx-a11y/control-has-associated-label': ERROR,
  },
};
