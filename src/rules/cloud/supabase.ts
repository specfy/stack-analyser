import { register } from '../../register.js';

register({
  tech: 'supabase',
  name: 'Supabase',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: /^@supabase\//, example: '@supabase/supabase.js' },
    { type: 'githubAction', name: 'supabase/setup-cli' },
    { type: 'docker', name: 'supabase/studio' },
    { type: 'python', name: 'supabase' },
  ],
});
