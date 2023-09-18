import { register } from '../../register.js';

register({
  tech: 'aws.cloudwatch',
  name: 'AWS Cloudwatch',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-cloudwatch' },
    { type: 'npm', name: '@aws-sdk/client-cloudwatch' },
    { type: 'rust', name: 'aws-sdk-cloudwatch' },
    { type: 'ruby', name: 'aws-sdk-cloudwatch' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/cloudwatch',
    },
    {
      type: 'terraform.resource',
      name: /^aws_cloudwatch_/,
      example: 'aws_cloudwatch_dashboard',
    },
  ],
});
