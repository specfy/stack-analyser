import { register } from '../../rules';

register({
  tech: 'zookeeper',
  dependencies: [{ type: 'docker', name: /zookeeper/ }],
});
