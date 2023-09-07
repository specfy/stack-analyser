import { register } from '../../register.js';

register({
  tech: 'zookeeper',
  name: 'Zookeeper',
  type: 'app',
  dependencies: [
    { type: 'docker', name: /zookeeper/, example: 'zookeeper:0.0.0' },
    { type: 'rust', name: 'zookeeper' },
    { type: 'ruby', name: 'zookeeper' },
    { type: 'php', name: 'sparkinfluence/zookeeper' },
  ],
});
