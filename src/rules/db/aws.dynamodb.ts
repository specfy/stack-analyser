import { register } from '../../rules.js';

register({
  tech: 'aws.dynamodb',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-dynamodb' },
    {
      type: 'docker',
      name: /amazon\/dynamodb-local/,
      example: 'amazon/dynamodb-local:0.0.0',
    },
    { type: 'rustcargo', name: 'aws-sdk-dynamodb' },
  ],
});
