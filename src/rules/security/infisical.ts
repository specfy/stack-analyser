import { register } from '../../register.js';

register({
  tech: 'infisical',
  name: 'Infisical',
  type: 'security',
  files: ['.infisical.json'],
  dotenv: ['INFISICAL_'],
  dependencies: [
    { type: 'npm', name: 'infisical' },
    { type: 'docker', name: 'infisical/infisical' },
  ],
});
