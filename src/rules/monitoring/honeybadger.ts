import { register } from '../../register.js';

register({
  tech: 'honeybadger',
  name: 'Honeybadger',
  type: 'monitoring',
  dotenv: ['HONEYBADGER_'],
  dependencies: [
    { type: 'npm', name: /^@honeybadger-io\//, example: '@honeybadger-io/js' },
    { type: 'npm', name: 'honeybadger' },
    { type: 'ruby', name: 'honeybadger' },
    { type: 'python', name: 'honeybadger' },
    { type: 'golang', name: 'github.com/honeybadger-io/honeybadger-go' },
    { type: 'php', name: 'honeybadger-io/honeybadger-laravel' },
    { type: 'php', name: 'honeybadger-io/honeybadger-php' },
    // { type: 'elixir', name: 'honeybadger' },
  ],
});
