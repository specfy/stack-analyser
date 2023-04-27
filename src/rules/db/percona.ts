import { register } from '../../rules';

register({
  tech: 'percona',
  dependencies: [{ type: 'docker', name: /percona/ }],
});
