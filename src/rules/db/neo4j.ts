import { register } from '../../register.js';

register({
  tech: 'neo4j',
  name: 'Neo4j',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'neo4j-driver' },
    { type: 'docker', name: /neo4j/, example: 'neo4j:0.0.0' },
    { type: 'rust', name: 'neo4rs' },
    { type: 'ruby', name: 'neo4j-ruby-driver' },
  ],
});
