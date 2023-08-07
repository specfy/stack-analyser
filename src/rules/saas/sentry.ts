import { register } from '../../register.js';

register({
  tech: 'sentry',
  name: 'Sentry',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@sentry\//, example: '@sentry/browser' },
    { type: 'rust', name: 'sentry' },
    { type: 'ruby', name: /^sentry-/, example: 'sentry-rails' },
  ],
});
