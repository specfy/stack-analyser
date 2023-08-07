import { register } from '../../rules.js';

register({
  tech: 'okta',
  dependencies: [
    { type: 'npm', name: /@okta\//, example: '@okta/okta-signin-widget' },
    { type: 'terraform', name: 'registry.terraform.io/okta/okta' },
    { type: 'rustcargo', name: 'okta' },
  ],
});
