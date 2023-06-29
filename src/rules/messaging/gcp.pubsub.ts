import { register } from '../../rules.js';

register({
  tech: 'gcp.pubsub',
  dependencies: [
    { type: 'npm', name: '@google-cloud/pubsub' },
    {
      type: 'terraform.resource',
      name: 'google_pubsub_topic',
    },
  ],
});
