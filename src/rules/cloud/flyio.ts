import { register } from '../../register.js';

register({
  tech: 'flyio',
  name: 'Flyio',
  type: 'cloud',
  files: ['fly.toml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/fly-apps/fly' },
    { type: 'githubAction', name: 'superfly/flyctl-actions/setup-flyctl' },
  ],
});
