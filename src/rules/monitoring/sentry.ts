import { register } from '../../register.js';

register({
  tech: 'sentry',
  name: 'Sentry',
  type: 'monitoring',
  dependencies: [
    { type: 'docker', name: 'sentry' },
    { type: 'docker', name: 'getsentry/sentry' },
    { type: 'docker', name: 'getsentry/sentry-cli' },
    { type: 'docker', name: 'sentryintegrations/sentry-github-action-release' },
    { type: 'docker', name: 'daprio/sentry' },
    { type: 'docker', name: 'us.gcr.io/sentryio/sentry' },
    { type: 'npm', name: /^@sentry\//, example: '@sentry/browser' },
    { type: 'rust', name: 'sentry' },
    { type: 'ruby', name: /^sentry-/, example: 'sentry-rails' },
    { type: 'php', name: 'sentry/sentry' },
    { type: 'php', name: 'sentry/sentry-symfony' },
    { type: 'php', name: 'sentry/sentry-laravel' },
    { type: 'php', name: 'sentry/sdk' },
    { type: 'githubAction', name: 'getsentry/action-release' },
  ],
});
