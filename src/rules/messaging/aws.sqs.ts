import { register } from '../../register.js';

register({
  tech: 'aws.sqs',
  name: 'SQS',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-sqs' },
    { type: 'rust', name: 'aws-sdk-sqs' },
    { type: 'ruby', name: 'aws-sdk-sqs' },
  ],
});
