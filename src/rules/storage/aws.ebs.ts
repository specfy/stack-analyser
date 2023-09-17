import { register } from '../../register.js';

register({
  tech: 'aws.ebs',
  name: 'AWS EBS',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/aws-ebs' },
    { type: 'rust', name: 'aws-sdk-ebs' },
    { type: 'ruby', name: 'aws-sdk-ebs' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/ebs' },
    {
      type: 'terraform.resource',
      name: /^aws_ebs_/,
      example: 'aws_ebs_volume',
    },
  ],
});
