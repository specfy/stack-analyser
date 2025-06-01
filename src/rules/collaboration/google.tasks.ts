import { register } from '../../register.js';

register({
  tech: 'google.tasks',
  name: 'Google Tasks',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/tasks' },
    { type: 'ruby', name: 'google-apis-tasks_v1' },
  ],
});
