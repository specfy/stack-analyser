import { register } from '../../register.js';

register({
  tech: 'supabase.storage',
  name: 'Supabase Storage',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@supabase/storage-js' },
    { type: 'docker', name: 'bitnami/supabase-storage' },
    { type: 'docker', name: 'supabase/storage-api' },
  ],
});
