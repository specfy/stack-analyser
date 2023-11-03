import { register } from '../../register.js';

register({
  tech: 'neondb',
  name: 'NeonDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@neondatabase/serverless' },
    { type: 'npm', name: '@neondatabase/api-client' },
    { type: 'npm', name: '@prisma/adapter-neon' },
    { type: 'docker', name: 'neondatabase/neon' },
  ],
});
