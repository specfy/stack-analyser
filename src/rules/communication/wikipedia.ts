import { register } from '../../register.js';

register({
  tech: 'wikipedia',
  name: 'Wikipedia',
  type: 'communication',
  dotenv: ['WIKIPEDIA_'],
  dependencies: [
    { type: 'python', name: 'wikipedia' },
    { type: 'npm', name: 'wikipedia' },
  ],
});
