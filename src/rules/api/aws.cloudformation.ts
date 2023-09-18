import { register } from '../../register.js';

register({
  tech: 'aws.cloudformation',
  name: 'AWS CloudFormation',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-cloudformation' },
    { type: 'npm', name: '@aws-cdk/aws-cloudformation' },
    { type: 'rust', name: 'aws-sdk-cloudformation' },
    { type: 'ruby', name: 'aws-sdk-cloudformation' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/cloudformation',
    },
    {
      type: 'terraform.resource',
      name: /^aws_cloudformation_/,
      example: 'aws_cloudformation_stack',
    },
    {
      type: 'githubAction',
      name: 'aws-actions/aws-cloudformation-github-deploy',
    },
  ],
});
