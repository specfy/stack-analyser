import { register } from '../../register.js';

register({
  tech: 'aws.s3',
  name: 'S3',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-s3' },
    { type: 'docker', name: 'adobe/s3mock' },
    { type: 'rust', name: 'aws-sdk-s3' },
    { type: 'ruby', name: 'aws-sdk-s3' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/s3' },
    {
      type: 'terraform.resource',
      name: /^aws_s3/,
      example: 'aws_s3_bucket',
    },
    { type: 'php', name: 'async-aws/s3' },
    { type: 'php', name: 'async-aws/simple-s3' },
  ],
});
