import { register } from '../../rules.js';

register({
  tech: 'memcached',
  dependencies: [
    { type: 'npm', name: 'memcached' },
    { type: 'docker', name: /memcached/, example: 'memcached:0.0.0' },
    { type: 'rust', name: 'memcache-async' },
    { type: 'rust', name: 'memcache' },
    { type: 'ruby', name: 'dalli' },
  ],
});
