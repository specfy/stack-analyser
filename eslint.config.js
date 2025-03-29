import lint from '@h1fra/eslint-config';

export default [
  {
    ignores: ['**/dist/', '**/node_modules/', '**/.wrangler'],
  },
  ...lint.configs.base,
  ...lint.configs.strict,
  {
    settings: {},
    rules: {
      'import-x/extensions': 'off', // does not work for some reason
      'import-x/no-extraneous-dependencies': 'off', // does not work for some reason
    },
  },
  {
    files: ['**/**.test.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
