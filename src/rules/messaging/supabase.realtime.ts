import { register } from '../../register.js';

register({
  tech: 'supabase.realtime',
  name: 'Supabase Realtime',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@supabase/realtime-js' },
    { type: 'docker', name: 'bitnami/supabase-realtime' },
    { type: 'docker', name: 'supabase/realtime' },
  ],
});
