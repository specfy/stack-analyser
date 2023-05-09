import { register } from '../../rules.js';

register({
  tech: 'percona',
  dependencies: [{ type: 'docker', name: /percona/, example: 'percona:0.0.0' }],
});
