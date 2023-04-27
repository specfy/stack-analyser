import { register } from '../../rules';

register({
  tech: 'jest',
  files: /jest.config.(js|ts|mjs|cjs|json)/,
  dependencies: [
    { type: 'npm', name: 'jest' },
    { type: 'npm', name: 'babel-jest' },
    { type: 'npm', name: 'jest-cli' },
  ],
});
