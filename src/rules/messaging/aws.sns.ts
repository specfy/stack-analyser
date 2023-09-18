import { register } from '../../register.js';

register({
  tech: 'aws.sns',
  name: 'AWS Notification Service',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-sns' },
    { type: 'npm', name: '@aws-sdk/client-sns' },
    { type: 'rust', name: 'aws-sdk-sns' },
    { type: 'ruby', name: 'aws-sdk-sns' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/sns' },
    {
      type: 'terraform.resource',
      name: /^aws_sns/,
      example: 'aws_sns_topic',
    },
    { type: 'php', name: 'aws/aws-php-sns-message-validator' },
    { type: 'php', name: 'async-aws/sns' },
  ],
});
