import { register } from '../../register.js';

register({
  tech: 'aws.dynamodb',
  name: 'AWS DynamoDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-dynamodb' },
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
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/dynamodb',
    },
    {
      type: 'terraform.resource',
      name: /^aws_dynamodb/,
      example: 'aws_dynamodb_table',
    },
    { type: 'php', name: 'baopham/dynamodb' },
    { type: 'php', name: 'async-aws/dynamo-db' },
  ],
});
