import { register } from '../../register.js';

register({
  tech: 'cloudflare',
  name: 'Cloudflare',
  type: 'cloud',
  dependencies: [
    {
      type: 'npm',
      name: /^@cloudflare\//,
      example: '@cloudflare/kv-asset-handler',
    },
    { type: 'terraform', name: 'registry.terraform.io/cloudflare/cloudflare' },
    { type: 'rust', name: 'cloudflare' },
    { type: 'ruby', name: 'cloudflare-rails' },
    { type: 'php', name: 'cloudflare/sdk' },
  ],
});
