import { register } from '../../rules';

register({
  tech: 'cassandra',
  dependencies: [
    { type: 'docker', name: /cassandra/, example: 'cassandra:0.0.0' },
  ],
});
