import { register } from '../../register.js';

register({
  tech: 'goent',
  name: 'ent.',
  type: 'orm',
  dependencies: [{ type: 'golang', name: 'entgo.io/ent' }],
});
