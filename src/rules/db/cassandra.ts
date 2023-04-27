import { register } from '../../rules';

register({
  tech: 'cassandra',
  dependencies: [{ type: 'docker', name: /cassandra/ }],
});
