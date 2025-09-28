import { register } from '../../register.js';

register({
  tech: 'useautumn',
  name: 'Use Autumn',
  type: 'payment',
  dotenv: ['AUTUMN_'],
  dependencies: [{ type: 'npm', name: 'autumn-js' }],
});
