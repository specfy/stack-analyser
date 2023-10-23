import { register } from '../../register.js';

register({
  tech: 'consul',
  name: 'Consul',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'consul' }],
});
