import { register } from '../../register.js';

register({
  tech: 'aws.ec2',
  name: 'EC2',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-ec2' },
    { type: 'rust', name: 'aws-sdk-ec2' },
    { type: 'ruby', name: 'aws-sdk-ec2' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/ec2' },
    {
      type: 'terraform.resource',
      name: /^aws_ec2/,
      example: 'aws_ec2_instance_type',
    },
    {
      type: 'githubAction',
      name: 'bitovi/github-actions-deploy-docker-to-ec2',
    },
  ],
});
