import { register } from '../../register.js';

register({
  tech: 'gcp.memorystore',
  name: 'Google Cloud Memorystore',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/redis' },
    {
      type: 'terraform.resource',
      name: /^google_redis_/,
      example: 'google_redis_cluster',
    },
    {
      type: 'ruby',
      name: /^google-cloud-redis/,
      example: 'google-cloud-redis-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/redis' },
    { type: 'php', name: 'google/cloud-redis' },
  ],
});
