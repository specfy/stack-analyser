import { register } from '../../register.js';

register({
  tech: 'miro',
  name: 'Miro',
  type: 'collaboration',
  dotenv: ['MIRO_'],
  dependencies: [{ type: 'npm', name: '@mirohq/miro-api' }],
});
