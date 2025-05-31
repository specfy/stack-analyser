import { register } from '../../register.js';

register({
  tech: 'workos',
  name: 'WorkOS',
  type: 'auth',
  dotenv: ['WORKOS_'],
  dependencies: [
    { type: 'npm', name: '@workos-inc/node' },
    { type: 'golang', name: 'github.com/workos/workos-go' },
    { type: 'ruby', name: 'workos' },
    { type: 'ruby', name: 'omniauth-workos' },
    { type: 'ruby', name: 'ueberauth_workos' },
    { type: 'python', name: 'workos' },
    { type: 'php', name: 'workos/workos-php' },
    { type: 'python', name: 'django-workos' },
  ],
});
