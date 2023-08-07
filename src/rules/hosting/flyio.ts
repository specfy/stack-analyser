import { register } from '../../register.js';

register({
  tech: 'flyio',
  name: 'Flyio',
  type: 'hosting',
  files: ['fly.toml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/fly-apps/fly' },
  ],
});
