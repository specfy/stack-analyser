import { register } from '../../register.js';

register({
  tech: 'typebox',
  name: 'TypeBox',
  type: 'validation',
  dependencies: [{ type: 'npm', name: '@sinclair/typebox' }],
});
