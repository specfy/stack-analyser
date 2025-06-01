import { register } from '../../register.js';

register({
  tech: 'chef',
  name: 'Chef',
  type: 'iac',
  dependencies: [{ type: 'docker', name: 'chef/chef' }],
});
