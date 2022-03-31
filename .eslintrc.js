module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'plugins': [
    'jsdoc',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'semi': ['error', 'always'],
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    'indent': 'off',
    'no-unused-vars': 'warn',
  },
};
