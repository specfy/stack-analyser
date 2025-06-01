import { register } from '../../register.js';

register({
  tech: 'google.analytics',
  name: 'Google Analytics',
  type: 'analytics',
  dotenv: ['GOOGLE_ANALYTICS'],
  dependencies: [
    { type: 'npm', name: 'universal-analytics' },
    { type: 'npm', name: 'react-ga' },
    { type: 'npm', name: 'react-ga4' },
    { type: 'npm', name: '@types/google.analytics' },
    { type: 'npm', name: '@docusaurus/plugin-google-analytics' },
    { type: 'npm', name: '@analytics/google-analytics' },
    { type: 'npm', name: /^@google-analytics\\/, example: '@google-analytics/data' },
    { type: 'npm', name: 'nextjs-google-analytics' },
    { type: 'npm', name: '@nuxtjs/google-analytics' },
    { type: 'npm', name: 'gatsby-plugin-google-analytics' },
    { type: 'php', name: 'google/analytics-data' },
    { type: 'php', name: 'spatie/laravel-analytics' },
    { type: 'php', name: 'theiconic/php-ga-measurement-protocol' },
    { type: 'php', name: 'google/analytics-admin' },
    { type: 'terraform.resource', name: 'airbyte_source_google_analytics_data_api' },
  ],
});
