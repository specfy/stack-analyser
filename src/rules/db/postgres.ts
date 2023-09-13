import { register } from '../../register.js';

register({
  tech: 'postgresql',
  name: 'Postgres',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'pg' },
    { type: 'docker', name: /postgres/, example: 'postgres:0.0.0' },
    { type: 'rust', name: 'postgres' },
    { type: 'ruby', name: 'pg' },
    {
      type: 'deno',
      name: /\/x\/postgres@/,
      example: 'https://deno.land/x/postgres@v0.17.0/mod.ts',
    },
    { type: 'php', name: 'martin-georgiev/postgresql-for-doctrine' },
  ],
});
