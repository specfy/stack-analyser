import { register } from '../../register.js';

register({
  tech: 'mongoexpress',
  name: 'Mongo Express',
  type: 'tool',
  dependencies: [{ type: 'docker', name: 'mongo-express' }],
});
