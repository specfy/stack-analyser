import { register } from '../../register.js';

register({
  tech: 'novu',
  name: 'Novy',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@novu/notification-center-vue' },
    { type: 'npm', name: '@novu/notification-center' },
    { type: 'npm', name: '@novu/notification-center-angular' },
    { type: 'npm', name: '@novu/node' },
    { type: 'php', name: 'unicodeveloper/novu' },
    { type: 'php', name: 'novu/novu-laravel' },
    { type: 'python', name: 'novu' },
    { type: 'ruby', name: 'novu' },
    { type: 'golang', name: 'github.com/novuhq/go-novu' },
    { type: 'docker', name: 'ghcr.io/novuhq/novu/api' },
    { type: 'docker', name: 'ghcr.io/novuhq/novu/ws' },
    { type: 'docker', name: 'ghcr.io/novuhq/novu/widget' },
    { type: 'docker', name: 'ghcr.io/novuhq/novu/web' },
  ],
});
