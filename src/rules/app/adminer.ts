import { register } from '../../register.js';

register({
  tech: 'adminer',
  name: 'Adminer',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'adminer' }],
});
