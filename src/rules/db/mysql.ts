import { register } from '../../rules.js';

register({
  tech: 'mysql',
  dependencies: [
    { type: 'npm', name: 'mysql' },
    { type: 'docker', name: /mysql/, example: 'mysql:0.0.0' },
  ],
});
