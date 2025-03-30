import { register } from '../../register.js';

register({
  tech: 'celery',
  name: 'Celery',
  type: 'queue',
  dependencies: [{ type: 'python', name: 'celery' }],
});
