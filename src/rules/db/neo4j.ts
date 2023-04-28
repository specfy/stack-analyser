import { register } from '../../rules';

register({
  tech: 'neo4j',
  dependencies: [
    { type: 'npm', name: 'neo4j-driver' },
    { type: 'docker', name: /neo4j/, example: 'neo4j:0.0.0' },
  ],
});
