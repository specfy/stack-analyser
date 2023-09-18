import { register } from '../../register.js';

register({
  tech: 'aws.efs',
  name: 'AWS File System',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-efs' },
    { type: 'npm', name: '@aws-sdk/client-efs' },
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
