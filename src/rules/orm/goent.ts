import { register } from '../../register.js';

register({
  tech: 'goent',
  name: 'ent.',
  type: 'orm',
  dependencies: [{ type: 'php', name: 'entgo.io/ent' }],
});
