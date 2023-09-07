import { register } from '../../register.js';

register({
  tech: 'googleanalytics',
  name: 'Google Analytics',
  type: 'analytics',
  dependencies: [
    { type: 'php', name: 'google/analytics-data' },
    { type: 'php', name: 'spatie/laravel-analytics' },
    { type: 'php', name: 'theiconic/php-ga-measurement-protocol' },
    { type: 'php', name: 'google/analytics-admin' },
  ],
});
