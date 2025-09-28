import { register } from '../../register.js';

register({
  tech: 'fathom',
  name: 'Fathom',
  type: 'analytics',
  dotenv: ['FATHOM_'],
  dependencies: [{ type: 'npm', name: 'fathom-client' }],
});
