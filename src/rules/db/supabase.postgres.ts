import { register } from '../../register.js';

register({
  tech: 'supabase.postgres',
  name: 'Supabase Postgres',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@supabase/postgrest-js' },
    { type: 'npm', name: '@supabase/pg-admin-js' },
    { type: 'npm', name: '@supabase/postgres-meta' },
    { type: 'npm', name: '@supabase/realtime-js' },
  ],
});
