import { register } from '../../register.js';

register({
  tech: 'pirschanalytics',
  name: 'Pirsch Analytics',
  type: 'analytics',
  dependencies: [
    { type: 'npm', name: 'pirsch-sdk' },
    { type: 'ruby', name: 'pirsch_api' },
    { type: 'php', name: 'pirsch-analytics/sdk' },
    { type: 'golang', name: 'github.com/pirsch-analytics/pirsch-go-sdk/v2' },
  ],
});
