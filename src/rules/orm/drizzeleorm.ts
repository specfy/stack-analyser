import { register } from '../../register.js';

register({
  tech: 'drizzleorm',
  name: 'Drizzle ORM',
  type: 'orm',
  dependencies: [{ type: 'npm', name: 'drizzle-orm' }],
});
