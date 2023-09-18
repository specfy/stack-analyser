import { register } from '../../register.js';

register({
  tech: 'aws.mq',
  name: 'AWS ActiveMQ',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-mq' },
    { type: 'npm', name: '@aws-sdk/client-mq' },
    { type: 'rust', name: 'aws-sdk-mq' },
    { type: 'ruby', name: 'aws-sdk-mq' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/mq' },
    {
      type: 'terraform.resource',
      name: /^aws_mq_/,
      example: 'aws_mq_broker',
    },
  ],
});
