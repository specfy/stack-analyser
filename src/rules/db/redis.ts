import { register } from '../../register.js';

register({
  tech: 'redis',
  name: 'Redis',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'redis' },
    { type: 'npm', name: 'ioredis' },
    { type: 'docker', name: /redis/, example: 'redis:0.0.0' },
    { type: 'rust', name: 'redis' },
    { type: 'rust', name: 'redis-async' },
    { type: 'ruby', name: 'redis' },
    { type: 'ruby', name: 'redis-client' },
    { type: 'php', name: 'predis/predis' },
  ],
});
