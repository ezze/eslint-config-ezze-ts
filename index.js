const js = require('@eslint/js');
const tseslint = require('typescript-eslint');

// Plugins
const importPlugin = require('eslint-plugin-import-x');
const stylisticPlugin = require('@stylistic/eslint-plugin');

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'import-x': importPlugin,
      '@stylistic': stylisticPlugin
    },
    rules: {
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          alphabetize: { caseInsensitive: true, order: 'asc' }
        }
      ],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': 'error',
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/block-spacing': 'error',
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': 'error',
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
      '@stylistic/indent': ['error', 2, { flatTernaryExpressions: false, offsetTernaryExpressions: true }],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/key-spacing': ['error', { mode: 'strict', beforeColon: false, afterColon: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/lines-between-class-members': [
        'error',
        {
          enforce: [
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' }
          ]
        }
      ],
      '@stylistic/max-len': ['error', 120],
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-operators': [
        'error',
        {
          groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['&&', '||']
          ]
        }
      ],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always', { arraysInObjects: true, objectsInObjects: true }],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' }
      ],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': ['error', { int32Hint: true }],
      '@stylistic/spaced-comment': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
];
