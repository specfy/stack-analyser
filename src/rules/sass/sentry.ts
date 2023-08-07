import { register } from '../../rules.js';

register({
  tech: 'sentry',
  dependencies: [
    { type: 'npm', name: /^@sentry\//, example: '@sentry/browser' },
    { type: 'rust', name: 'sentry' },
    { type: 'ruby', name: /^sentry-/, example: 'sentry-rails' },
  ],
});
