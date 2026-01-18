import { register } from '../../register.js';

register({
  tech: 'base44',
  name: 'Base44',
  type: 'saas',
  dependencies: [{ type: 'npm', name: '@base44/sdk' }],
});
