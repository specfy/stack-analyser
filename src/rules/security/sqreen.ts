import { register } from '../../register.js';

register({
  tech: 'sqreen',
  name: 'Sqreen',
  type: 'security',
  dotenv: ['SQREEN_'],
  dependencies: [
    { type: 'npm', name: 'sqreen' },
    { type: 'ruby', name: 'sqreen' },
  ],
});
