import { register } from '../../register.js';

register({
  tech: 'okta',
  name: 'Okta',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@okta\//, example: '@okta/okta-signin-widget' },
    { type: 'terraform', name: 'registry.terraform.io/okta/okta' },
    { type: 'rust', name: 'okta' },
    { type: 'ruby', name: 'oktakit' },
    { type: 'php', name: 'socialiteproviders/okta' },
  ],
});
