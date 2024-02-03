const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/next'),
    'eslint-config-turbo',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'warn',
    'prefer-const': 'error',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        distinctGroup: false,
      },
    ],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    '*.js',
  ],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
}
