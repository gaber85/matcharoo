module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],

  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb',
    'airbnb-base',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  plugins: [
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'filenames',
    'import',
  ],

  rules: {
    'no-restricted-properties': [
      'error',
      {
        object: 'React',
        message: 'Do not import default from React, use a destructured import instead.',
      },
    ],

    // React Rules
    'react/state-in-constructor': ['error', 'never'],
    'react/destructuring-assignment': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }], // prevent developer typos impacting code…
    'react/jsx-wrap-multilines': 'off', // prettier will take care of this
    'react/jsx-one-expression-per-line': 'off', // this makes weird whitespace
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': ['off', { explicitSpread: 'ignore' }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off', // JSX transform was introduced in React 17 
    'react/function-component-definition': [
      'error',
      {
          'namedComponents': 'arrow-function',
          'unnamedComponents': 'arrow-function',
      },
  ],
    // General rules
    // Enforces the starred-block style for multiline comments. see https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': ['error', 'starred-block'],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'semi': ['error', 'always'],
    'quotes': ['error','single'],
    'eol-last': ['error', 'always'],

    // Hooks:
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Import:
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'unknown',
          'internal',
          ['sibling', 'parent'],
          'index',
          'object',
          'type',
        ],
      },
    ],
    /*
     * Typescript
     * disallow const enums in 'no-restricted-syntax'
     */
    '@typescript-eslint/prefer-enum-initializers': ['error'],
    '@typescript-eslint/prefer-literal-enum-member': ['error'],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // use `interface {}` over `type = {}` where possible

    // Typescript + Eslint Clashes:
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
