import { register } from '../../register.js';

register({
  tech: 'celery',
  name: 'Celery',
  type: 'messaging',
  dependencies: [{ type: 'python', name: 'celery' }],
});
