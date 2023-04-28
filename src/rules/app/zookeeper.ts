import { register } from '../../rules';

register({
  tech: 'zookeeper',
  dependencies: [
    { type: 'docker', name: /zookeeper/, example: 'zookeeper:0.0.0' },
  ],
});
