import { register } from '../../register.js';

register({
  tech: 'aws.efs',
  name: 'AWS EFS',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/aws-efs' },
    { type: 'rust', name: 'aws-sdk-efs' },
    { type: 'ruby', name: 'aws-sdk-efs' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/efs' },
    {
      type: 'terraform.resource',
      name: /^aws_efs_/,
      example: 'aws_efs_file_system',
    },
  ],
});
