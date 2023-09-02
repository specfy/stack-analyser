import { register } from '../../register.js';

register({
  tech: 'vercel.ai',
  name: 'Vercel AI',
  type: 'api',
  dependencies: [{ type: 'npm', name: '@vercel/ai' }],
});
