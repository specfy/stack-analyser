import { register } from '../../register.js';

register({
  tech: 'supabase',
  name: 'Supabase',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: /^@supabase\//, example: '@supabase/supabase.js' },
    { type: 'githubAction', name: 'supabase/setup-cli' },
  ],
});
