import { register } from '../../register.js';

register({
  tech: 'cloudflare.workers',
  name: 'Cloudflare Workers',
  type: 'hosting',
  files: ['wrangler.toml'],
  dependencies: [
    { type: 'npm', name: 'wrangler' },
    { type: 'npm', name: '@miniflare/cache' },
    { type: 'npm', name: 'miniflare' },
    {
      type: 'terraform.resource',
      name: /^cloudflare_workers_/,
      example: 'cloudflare_workers_kv_namespace',
    },
    { type: 'githubAction', name: 'cloudflare/wrangler-action' },
  ],
});
