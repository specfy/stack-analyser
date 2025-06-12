import { register } from '../../register.js';

register({
  tech: 'vercel.functions',
  name: 'Vercel Functions',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@vercel/functions' },
    { type: 'npm', name: '@vercel/og' },
  ],
});
