import { register } from '../../register.js';

register({
  tech: 'vercel.edge',
  name: 'Vercel Edge',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@vercel/edge' },
    { type: 'npm', name: '@vercel/edge-config' },
    { type: 'npm', name: '@vercel/edge-functions-ui' },
    { type: 'npm', name: '@edge-runtime/primitives' },
  ],
});
