import { register } from '../../register.js';

register({
  tech: 'mongoexpress',
  name: 'Mongo Express',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'mongo-express' }],
});
