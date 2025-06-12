import { register } from '../../register.js';

register({
  tech: 'trpc',
  name: 'TRPC',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: '@trpc/server' },
    { type: 'npm', name: '@trpc/client' },
    { type: 'npm', name: '@trpc/react-query' },
    { type: 'npm', name: '@trpc/next' },
  ],
});
