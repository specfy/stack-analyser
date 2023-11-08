import { register } from '../../register.js';

register({
  tech: 'redis',
  name: 'Redis',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'redis' },
    { type: 'npm', name: '@opentelemetry/instrumentation-redis' },
    { type: 'npm', name: '@opentelemetry/instrumentation-redis-4' },
    { type: 'npm', name: '@opentelemetry/instrumentation-ioredis' },
    { type: 'npm', name: 'ioredis' },
    { type: 'docker', name: /redis/, example: 'redis:0.0.0' },
    { type: 'rust', name: 'redis' },
    { type: 'rust', name: 'redis-async' },
    { type: 'ruby', name: 'redis' },
    { type: 'ruby', name: 'redis-client' },
    { type: 'php', name: 'predis/predis' },
    { type: 'php', name: 'snc/redis-bundle' },
    { type: 'php', name: 'colinmollenhour/cache-backend-redis' },
  ],
});
