import { register } from '../../register.js';

register({
  tech: 'bugsnag',
  name: 'Bugsnag',
  type: 'monitoring',
  dotenv: ['BUGSNAG_'],
  dependencies: [
    { type: 'npm', name: '@bugsnag/js' },
    { type: 'npm', name: '@bugsnag/node' },
    { type: 'npm', name: '@bugsnag/react-native' },
    { type: 'python', name: 'bugsnag' },
    { type: 'php', name: 'bugsnag/bugsnag' },
    { type: 'php', name: 'bugsnag/bugsnag-laravel' },
    { type: 'ruby', name: 'bugsnag' },
    { type: 'golang', name: 'github.com/bugsnag/bugsnag-go' },
    { type: 'npm', name: '@bugsnag/expo' },
  ],
});
