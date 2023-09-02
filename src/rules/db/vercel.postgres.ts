import { register } from '../../register.js';

register({
  tech: 'vercel.postgres',
  name: 'Vercel Postgres',
  type: 'db',
  dependencies: [{ type: 'npm', name: '@vercel/postgres' }],
});
