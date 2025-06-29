import { register } from '../../register.js';

register({
  tech: 'adonisjs',
  name: 'AdonisJS',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'adonisjs' },
    { type: 'npm', name: '@adonisjs/core' },
  ],
});
