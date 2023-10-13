import { register } from '../../register.js';

register({
  tech: 'supabase.functions',
  name: 'Supabase Functions',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@supabase/functions-js' },
    { type: 'npm', name: 'supabase/functions-php' },
  ],
});
