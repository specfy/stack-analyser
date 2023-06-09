import { register } from '../../rules.js';

register({
  tech: 'memcached',
  dependencies: [
    { type: 'npm', name: 'memcached' },
    { type: 'docker', name: /memcached/, example: 'memcached:0.0.0' },
  ],
});
