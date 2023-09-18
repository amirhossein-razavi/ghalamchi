module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
      alias: {
        map: [
          ['utils', './src/utils'],
          ['hooks', './src/hooks'],
        ],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-alert': 0,
    'object-curly-newline': 0,
    'max-len': ['error', { code: 200 }],
    'import/prefer-default-export': 0,
    'no-unsafe-optional-chaining': 0,
  },
};
