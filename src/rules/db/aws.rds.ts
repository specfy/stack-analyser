import { register } from '../../register.js';

register({
  tech: 'aws.rds',
  name: 'AWS RDS',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-rds' },
    { type: 'npm', name: '@aws-sdk/client-rds' },
    { type: 'npm', name: '@aws-sdk/middleware-sdk-rds' },
    { type: 'rust', name: 'aws-sdk-rds' },
    { type: 'ruby', name: 'aws-sdk-rds' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/rds' },
    {
      type: 'terraform.resource',
      name: /^aws_rds/,
      example: 'aws_rds_cluster',
    },
    { type: 'php', name: 'async-aws/rds-data-service' },
  ],
});
