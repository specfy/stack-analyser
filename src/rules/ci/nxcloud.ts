import { register } from '../../register.js';

register({
  tech: 'nxcloud',
  name: 'NX Cloud',
  type: 'ci',
  dependencies: [{ type: 'npm', name: 'nx-cloud' }],
});
