import { register } from '../../register.js';

register({
  tech: 'cratedb',
  name: 'CrateDB',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'cratedb' }],
});
