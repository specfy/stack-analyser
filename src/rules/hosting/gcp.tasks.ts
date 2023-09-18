import { register } from '../../register.js';

register({
  tech: 'gcp.tasks',
  name: 'Cloud Tasks',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@google-cloud/tasks' },
    {
      type: 'terraform.resource',
      name: /^google_cloud_tasks_/,
      example: 'google_cloud_tasks_queue',
    },
    {
      type: 'ruby',
      name: /^google-cloud-tasks/,
      example: 'google-cloud-tasks-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/tasks' },
    { type: 'php', name: 'google/cloud-tasks' },
  ],
});
