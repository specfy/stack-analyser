import { register } from '../../register.js';

register({
  tech: 'gcp.appengine',
  name: 'Google App Engine',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@google-cloud/appengine-admin' },
    {
      type: 'terraform.resource',
      name: /^google_app_engine_/,
      example: 'google_app_engine_application',
    },
    { type: 'ruby', name: 'appengine' },
    { type: 'golang', name: 'cloud.google.com/go/appengine' },
    { type: 'php', name: 'google/appengine-php-sdk' },
    {
      type: 'githubAction',
      name: 'google-github-actions/deploy-appengine',
    },
  ],
});
