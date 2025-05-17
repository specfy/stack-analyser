import { register } from '../../register.js';

register({
  tech: 'mochajs',
  name: 'Mocha',
  type: 'test',
  files: /.mocharc.(js|cjs|json|jsonc|yaml|yml)/,
  example: 'jest.config.ts',
  dependencies: [{ type: 'npm', name: 'mocha' }],
});
