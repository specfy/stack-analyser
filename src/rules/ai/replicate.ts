import { register } from '../../register.js';

register({
  tech: 'replicate',
  name: 'Replicate',
  type: 'ai',
  dotenv: ['REPLICATE_'],
  dependencies: [
    { type: 'npm', name: 'replicate' },
    { type: 'python', name: 'replicate' },
  ],
});
