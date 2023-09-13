import { register } from '../../register.js';

register({
  tech: 'supabase',
  name: 'Supabase',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: /^@scaleway\//, example: '@supabase/supabase.js' },
    { type: 'githubAction', name: 'supabase/setup-cli' },
  ],
});
