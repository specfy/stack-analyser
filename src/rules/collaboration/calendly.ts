import { register } from '../../register.js';

register({
  tech: 'calendly',
  name: 'Calendly',
  type: 'collaboration',
  dependencies: [{ type: 'npm', name: 'react-calendly' }],
});
