import { register } from '../../register.js';

register({
  tech: 'chef',
  name: 'Chef',
  type: 'tool',
  dependencies: [{ type: 'docker', name: 'chef/chef' }],
});
