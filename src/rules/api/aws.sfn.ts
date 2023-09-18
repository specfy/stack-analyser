import { register } from '../../register.js';

register({
  tech: 'aws.sfn',
  name: 'AWS Step Functions',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-sfn' },
    { type: 'npm', name: '@aws-cdk/aws-sfn' },
    { type: 'rust', name: 'aws-sdk-sfn' },
    { type: 'ruby', name: 'aws-sdk-sfn' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/sfn' },
    {
      type: 'terraform.resource',
      name: /^aws_sfn_/,
      example: 'aws_sfn_activity',
    },
  ],
});
