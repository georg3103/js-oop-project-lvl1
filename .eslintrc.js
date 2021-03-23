module.exports = {
  plugins: [
    'jest',
  ],
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: [
          '__filename',
          '__dirname',
        ],
      },
    ],
  },
};
