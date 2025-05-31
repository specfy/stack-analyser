import { register } from '../../register.js';

register({
  tech: 'calendly',
  name: 'Calendly',
  type: 'collaboration',
  dotenv: ['CALENDLY_'],
  dependencies: [{ type: 'npm', name: 'react-calendly' }],
});
