import { register } from '../../register.js';

register({
  tech: 'supabase.auth',
  name: 'Supabase Auth',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: '@supabase/gotrue-js' },
    { type: 'docker', name: 'supabase/gotrue' },
  ],
});
