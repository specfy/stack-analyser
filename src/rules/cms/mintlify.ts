import { register } from '../../register.js';

register({
  tech: 'mintlify',
  name: 'Mintlify',
  type: 'cms',
  files: ['mint.json'],
  dependencies: [{ type: 'npm', name: 'mintlify' }],
});
