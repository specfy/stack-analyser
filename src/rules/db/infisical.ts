import { register } from '../../register.js';

register({
  tech: 'infisical',
  name: 'Infisical',
  type: 'db',
  files: ['.infisical.json'],
  dependencies: [
    { type: 'npm', name: 'infisical' },
    { type: 'docker', name: 'infisical/infisical' },
  ],
});
