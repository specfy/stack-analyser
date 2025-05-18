import { register } from '../../register.js';

register({
  tech: 'miro',
  name: 'Miro',
  type: 'collaboration',
  dependencies: [{ type: 'npm', name: '@mirohq/miro-api' }],
});
