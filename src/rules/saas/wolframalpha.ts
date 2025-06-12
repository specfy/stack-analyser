import { register } from '../../register.js';

register({
  tech: 'wolframalpha',
  name: 'Wolfram Alpha',
  type: 'saas',
  dotenv: ['WOLFRAM_'],
  dependencies: [{ type: 'python', name: 'wolframalpha' }],
});
