import { register } from '../../rules.js';

register({
  tech: 'mariadb',
  dependencies: [
    { type: 'npm', name: 'mariadb' },
    { type: 'docker', name: /mariadb/, example: 'mariadb:0.0.0' },
  ],
});
