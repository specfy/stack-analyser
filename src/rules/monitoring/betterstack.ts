import { register } from '../../register.js';

register({
  tech: 'betterstack',
  name: 'Better Stack',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: '@logtail/node' },
    { type: 'ruby', name: 'logtail-rails' },
    { type: 'php', name: 'logtail/monolog-logtail' },
  ],
});
