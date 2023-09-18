import { register } from '../../register.js';

register({
  tech: 'aws.sqs',
  name: 'AWS SQS',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-sqs' },
    { type: 'npm', name: '@aws-sdk/client-sqs' },
    { type: 'rust', name: 'aws-sdk-sqs' },
    { type: 'ruby', name: 'aws-sdk-sqs' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/sqs' },
    {
      type: 'terraform.resource',
      name: /^aws_sqs/,
      example: 'aws_sqs_queue',
    },
    { type: 'php', name: 'async-aws/sqs' },
  ],
});
