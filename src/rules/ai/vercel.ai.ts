import { register } from '../../register.js';

register({
  tech: 'vercel.ai',
  name: 'Vercel AI',
  type: 'ai',
  dependencies: [{ type: 'npm', name: '@vercel/ai' }],
});
