import { register } from '../../register.js';

register({
  tech: 'aws.ebs',
  name: 'AWS Block Storage',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-ebs' },
    { type: 'npm', name: '@aws-sdk/client-ebs' },
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
