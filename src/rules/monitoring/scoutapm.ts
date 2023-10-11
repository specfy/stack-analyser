import { register } from '../../register.js';

register({
  tech: 'scoutapm',
  name: 'Scout APM',
  type: 'monitoring',
  dependencies: [
    { type: 'ruby', name: 'scout_apm' },
    { type: 'php', name: 'scoutapp/scout-apm-php' },
    { type: 'php', name: 'scoutapp/scout-apm-laravel' },
    { type: 'npm', name: 'scoutapp/scout-apm-laravel' },
  ],
});
