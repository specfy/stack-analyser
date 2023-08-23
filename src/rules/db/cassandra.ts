import { register } from '../../register.js';

register({
  tech: 'cassandra',
  name: 'AWS Cassandra',
  type: 'db',
  dependencies: [
    { type: 'docker', name: /cassandra/, example: 'cassandra:0.0.0' },
    { type: 'rust', name: 'discord-cassandra-cpp' },
    { type: 'rust', name: 'cassandra-cpp' },
  ],
});
