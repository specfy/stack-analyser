import { register } from '../../register.js';

register({
  tech: 'dataiku',
  name: 'Dataiku',
  type: 'etl',
  dependencies: [{ type: 'python', name: 'dataiku' }],
});
