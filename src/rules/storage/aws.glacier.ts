import { register } from '../../register.js';

register({
  tech: 'aws.glacier',
  name: 'AWS Glacier',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-glacier' },
    { type: 'rust', name: 'aws-sdk-glacier' },
    { type: 'ruby', name: 'aws-sdk-glacier' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/glacier' },
    {
      type: 'terraform.resource',
      name: /^aws_glacier/,
      example: 'aws_glacier_vault',
    },
  ],
});
