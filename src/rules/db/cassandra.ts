import { register } from '../../rules.js';

register({
  tech: 'cassandra',
  dependencies: [
    { type: 'docker', name: /cassandra/, example: 'cassandra:0.0.0' },
    { type: 'rust', name: 'discord-cassandra-cpp' },
    { type: 'rust', name: 'cassandra-cpp' },
  ],
});
