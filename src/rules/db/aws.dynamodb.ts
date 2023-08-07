import { register } from '../../rules.js';

register({
  tech: 'aws.dynamodb',
  dependencies: [
    {
      type: 'npm',
      name: /^@aws-sdk\/client-dynamodb/,
      example: '@aws-sdk/client-dynamodb-streams',
    },
    {
      type: 'docker',
      name: /amazon\/dynamodb-local/,
      example: 'amazon/dynamodb-local:0.0.0',
    },
    { type: 'rust', name: 'aws-sdk-dynamodb' },
    {
      type: 'ruby',
      name: /^aws-sdk-dynamodb/,
      example: 'aws-sdk-dynamodbstreams',
    },
  ],
});
