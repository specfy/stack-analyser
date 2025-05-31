import { register } from '../../register.js';

register({
  tech: 'matomo',
  name: 'Matomo',
  type: 'analytics',
  dotenv: ['MATOMO'],
  dependencies: [
    { type: 'docker', name: 'matomo' },
    { type: 'docker', name: 'bitnami/matomo' },
  ],
});
