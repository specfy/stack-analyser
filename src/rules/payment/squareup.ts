import { register } from '../../register.js';

register({
  tech: 'squareup',
  name: 'Square',
  type: 'payment',
  dotenv: ['SQUARE_'],
  dependencies: [{ type: 'php', name: 'square/square' }],
});
