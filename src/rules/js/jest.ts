import { register } from '../../register.js';

register({
  tech: 'jest',
  name: 'Jest',
  type: 'tool',
  files: /jest.config.(js|ts|mjs|cjs|json)/,
  example: 'jest.config.ts',
  dependencies: [
    { type: 'npm', name: 'jest' },
    { type: 'npm', name: 'babel-jest' },
    { type: 'npm', name: 'jest-cli' },
  ],
});
