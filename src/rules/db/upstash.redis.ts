import { register } from '../../register.js';

register({
  tech: 'upstash.redis',
  name: 'Upstash Redis',
  type: 'db',
  dotenv: ['UPSTASH_REDIS_'],
  dependencies: [{ type: 'npm', name: '@upstash/redis' }],
});
