import { register } from '../../register.js';

register({
  tech: 'dieselrs',
  name: 'Diesel',
  type: 'orm',
  dependencies: [{ type: 'rust', name: 'diesel' }],
});
