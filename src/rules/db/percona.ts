import { register } from '../../rules';

register({
  tech: 'percona',
  dependencies: [{ type: 'docker', name: /percona/, example: 'percona:0.0.0' }],
});
