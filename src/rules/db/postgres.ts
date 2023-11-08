import { register } from '../../register.js';

register({
  tech: 'postgresql',
  name: 'Postgres',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'pg' },
    { type: 'npm', name: 'postgres' },
    { type: 'npm', name: 'postgres-interval' },
    { type: 'npm', name: '@opentelemetry/instrumentation-pg' },
    { type: 'npm', name: '@mikro-orm/postgresql' },
    { type: 'npm', name: 'pg-connection-string' },
    { type: 'docker', name: 'postgres' },
    { type: 'docker', name: 'bitnami/postgresql' },
    { type: 'docker', name: 'circleci/postgres' },
    { type: 'docker', name: 'cimg/postgres' },
    { type: 'docker', name: 'ubuntu/postgres' },
    { type: 'docker', name: 'bitnamicharts/postgresql' },
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
