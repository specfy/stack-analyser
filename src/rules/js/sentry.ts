import { register } from '../../rules';

register({
  tech: 'sentry',
  dependencies: [
    { type: 'npm', name: /@sentry\//, example: '@sentry/browser' },
  ],
});
