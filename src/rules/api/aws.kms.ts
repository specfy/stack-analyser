import { register } from '../../register.js';

register({
  tech: 'aws.kms',
  name: 'AWS Kms',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-kms' },
    { type: 'npm', name: '@aws-cdk/aws-kms' },
    { type: 'rust', name: 'aws-sdk-kms' },
    { type: 'ruby', name: 'aws-sdk-kms' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/kms' },
    {
      type: 'terraform.resource',
      name: /^aws_kms_/,
      example: 'aws_kms_alias',
    },
  ],
});
