import { register } from '../../register.js';

register({
  tech: 'nxjs',
  name: 'NX',
  type: 'builder',
  files: ['nx.json'],
  dependencies: [{ type: 'npm', name: 'nx' }],
});
