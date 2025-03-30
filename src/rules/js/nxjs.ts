import { register } from '../../register.js';

register({
  tech: 'nxjs',
  name: 'NX',
  type: 'tool',
  files: ['nx.json'],
  dependencies: [{ type: 'npm', name: 'nx' }],
});
