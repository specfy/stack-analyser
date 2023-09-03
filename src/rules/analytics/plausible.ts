import { register } from '../../register.js';

register({
  tech: 'plausible',
  name: 'Plausible',
  type: 'analytics',
  dependencies: [{ type: 'docker', name: 'plausible/analytics' }],
});
