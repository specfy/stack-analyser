import { register } from '../../register.js';

register({
  tech: 'adminer',
  name: 'Adminer',
  type: 'tool',
  dependencies: [{ type: 'docker', name: 'adminer' }],
});
