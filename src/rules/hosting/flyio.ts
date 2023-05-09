import { register } from '../../rules.js';

register({
  tech: 'flyio',
  files: ['fly.toml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/fly-apps/fly' },
  ],
});
