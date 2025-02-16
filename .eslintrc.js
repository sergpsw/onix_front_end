module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ]
};
