import { register } from '../../rules';

register({
  tech: 'mariadb',
  dependencies: [
    { type: 'npm', name: 'mariadb' },
    { type: 'docker', name: /mariadb/ },
  ],
});
