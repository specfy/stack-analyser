import { register } from '../../register.js';

register({
  tech: 'haproxy',
  name: 'HAProxy',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'haproxy' }],
});
