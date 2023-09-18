import { register } from '../../register.js';

register({
  tech: 'gcp.dialogflow',
  name: 'Cloud Dialogflow',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/dialogflow' },
    {
      type: 'terraform.resource',
      name: /^google_dialogflow_/,
      example: 'google_dialogflow_agent',
    },
    {
      type: 'ruby',
      name: /^google-cloud-dialogflow/,
      example: 'google-cloud-dialogflow-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/dialogflow' },
    { type: 'php', name: 'google/cloud-dialogflow' },
  ],
});
