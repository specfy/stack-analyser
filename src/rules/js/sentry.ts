import { register } from '../../rules.js';

register({
  tech: 'sentry',
  dependencies: [
    { type: 'npm', name: /@sentry\//, example: '@sentry/browser' },
  ],
});
