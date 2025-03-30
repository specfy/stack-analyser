import { register } from '../../register.js';

register({
  tech: 'postgrest',
  name: 'Postgrest',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'postgrest/postgrest' }],
});
