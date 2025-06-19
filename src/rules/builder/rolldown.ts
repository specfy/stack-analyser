import { register } from '../../register.js';

register({
  tech: 'rolldown',
  name: 'Rolldown',
  type: 'builder',
  dependencies: [{ type: 'npm', name: 'rolldown' }],
});
