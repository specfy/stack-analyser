import { register } from '../../register.js';

register({
  tech: 'squareup',
  name: 'Square',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'square/square' }],
});
