import { register } from '../../rules.js';

register({
  tech: 'aws.s3',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-s3' },
    { type: 'docker', name: 'adobe/s3mock' },
  ],
});
