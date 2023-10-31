import { register } from '../../register.js';

register({
  tech: 'oceanbase',
  name: 'Oceanbase',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'oceanbase/oceanbase-ce' }],
});
