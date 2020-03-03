module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier/standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^[$]' }
    ],
    'vue/html-self-closing': 'off',
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      { allowSingleLine: false }
    ],
    '@typescript-eslint/class-name-casing': ['error'],
    '@typescript-esling/no-empty-function': 'error',
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { allowTempalteLiterals: true, avoidEscape: true }
    ],
    'import/order': 0
  }
}
