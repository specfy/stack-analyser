import { register } from '../../register.js';

register({
  tech: 'kong',
  name: 'Kong',
  type: 'app',
  files: ['kong.conf'],
  dependencies: [{ type: 'docker', name: 'kong' }],
});
