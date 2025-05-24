import { register } from '../../register.js';

register({
  tech: 'cloudflare.r2',
  name: 'Cloudflare R2',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: 'node-cloudflare-r2' },
    {
      type: 'terraform.resource',
      name: /^cloudflare_r2/,
      example: 'cloudflare_r2_bucket',
    },
  ],
});
