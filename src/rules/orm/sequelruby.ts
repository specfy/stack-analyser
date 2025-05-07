import { register } from '../../register.js';

register({
  tech: 'sequelruby',
  name: 'Sequel',
  type: 'orm',
  dependencies: [{ type: 'ruby', name: 'sequel' }],
});
