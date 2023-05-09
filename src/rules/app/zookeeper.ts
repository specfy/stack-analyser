import { register } from '../../rules.js';

register({
  tech: 'zookeeper',
  dependencies: [
    { type: 'docker', name: /zookeeper/, example: 'zookeeper:0.0.0' },
  ],
});
