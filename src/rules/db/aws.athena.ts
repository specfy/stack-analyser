import { register } from '../../register.js';

register({
  tech: 'aws.athena',
  name: 'AWS Athena',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-athena' },
    { type: 'npm', name: '@aws-sdk/client-athena' },
    { type: 'rust', name: 'aws-sdk-athena' },
    { type: 'ruby', name: 'aws-sdk-athena' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/athena' },
    {
      type: 'terraform.resource',
      name: /^aws_athena/,
      example: 'aws_athena_database',
    },
  ],
});
