import { register } from '../../register.js';

register({
  tech: 'gcp.functions',
  name: 'Google Functions',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@google-cloud/functions-framework' },
    {
      type: 'terraform.resource',
      name: 'google_cloudfunctions_function',
    },
    {
      type: 'ruby',
      name: /^google-cloud-functions/,
      example: 'google-cloud-functions-v1',
    },
    { type: 'ruby', name: 'functions_framework ' },
    { type: 'golang', name: 'cloud.google.com/go/functions' },
    { type: 'php', name: 'google/cloud-functions-framework' },
    { type: 'php', name: 'google/cloud-functions' },
  ],
});
