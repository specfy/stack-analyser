import { register } from '../../register.js';

register({
  tech: 'stripe',
  name: 'Stripe',
  type: 'saas',
  dependencies: [{ type: 'npm', name: 'stripe' }],
});
