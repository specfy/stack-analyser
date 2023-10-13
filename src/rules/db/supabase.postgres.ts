import { register } from '../../register.js';

register({
  tech: 'supabase.postgres',
  name: 'Supabase Postgres',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@supabase/postgrest-js' },
    { type: 'npm', name: '@supabase/pg-admin-js' },
    { type: 'npm', name: '@supabase/postgres-meta' },
    { type: 'githubAction', name: 'supabase/embeddings-generator' },
    { type: 'docker', name: 'bitnami/supabase-postgres' },
    { type: 'docker', name: 'supabase/postgres' },
    { type: 'docker', name: 'supabase/postgres-meta' },
    { type: 'php', name: 'supabase/postgrest-php' },
  ],
});
