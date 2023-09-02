import { register } from '../../register.js';

register({
  tech: 'vercel.analytics',
  name: 'Vercel Analytics',
  type: 'analytics',
  dependencies: [{ type: 'npm', name: '@vercel/analytics' }],
});
