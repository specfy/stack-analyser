import { register } from '../../rules';

register({
  tech: 'memcached',
  dependencies: [
    { type: 'npm', name: 'memcached' },
    { type: 'docker', name: /memcached/ },
  ],
});
