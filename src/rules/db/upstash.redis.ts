import { register } from '../../register.js';

register({
  tech: 'upstash.redis',
  name: 'Upstash Redis',
  type: 'db',
  dependencies: [{ type: 'npm', name: '@upstash/redis' }],
});
