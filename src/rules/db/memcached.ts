import { register } from '../../register.js';

register({
  tech: 'memcached',
  name: 'Memcached',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'memcached' },
    { type: 'docker', name: /memcached/, example: 'memcached:0.0.0' },
    { type: 'rust', name: 'memcache-async' },
    { type: 'rust', name: 'memcache' },
    { type: 'ruby', name: 'dalli' },
  ],
});
