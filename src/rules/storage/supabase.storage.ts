import { register } from '../../register.js';

register({
  tech: 'supabase.storage',
  name: 'Supabase Storage',
  type: 'storage',
  dependencies: [{ type: 'npm', name: '@supabase/storage-js' }],
});
