import { register } from '../../register.js';

register({
  tech: 'percona',
  name: 'Percona',
  type: 'db',
  dependencies: [{ type: 'docker', name: /percona/, example: 'percona:0.0.0' }],
});
