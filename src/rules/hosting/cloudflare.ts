import { register } from '../../rules.js';

register({
  tech: 'cloudflare',
  dependencies: [
    {
      type: 'npm',
      name: /^@cloudflare\//,
      example: '@cloudflare/kv-asset-handler',
    },
    { type: 'terraform', name: 'registry.terraform.io/cloudflare/cloudflare' },
    { type: 'rust', name: 'cloudflare' },
    { type: 'ruby', name: 'cloudflare-rails' },
  ],
});
