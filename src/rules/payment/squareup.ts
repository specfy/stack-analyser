import { register } from '../../register.js';

register({
  tech: 'squareup',
  name: 'Square',
  type: 'payment',
  dependencies: [{ type: 'php', name: 'square/square' }],
});
