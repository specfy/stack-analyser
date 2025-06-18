import { register } from '../../register.js';

register({
  tech: 'mintlify',
  name: 'Mintlify',
  type: 'ssg',
  files: ['mint.json'],
  dependencies: [{ type: 'npm', name: 'mintlify' }],
});
