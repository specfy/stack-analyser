import { register } from '../../register.js';

register({
  tech: 'vercel.kv',
  name: 'Vercel KV',
  type: 'db',
  dependencies: [{ type: 'npm', name: '@vercel/kv' }],
});
