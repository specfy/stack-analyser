import { register } from '../../rules.js';

register({
  tech: 'cloudflare',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/cloudflare/cloudflare' },
  ],
});
