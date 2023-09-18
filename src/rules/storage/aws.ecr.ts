import { register } from '../../register.js';

register({
  tech: 'aws.ecr',
  name: 'AWS Container Registry',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-ecr' },
    { type: 'npm', name: '@aws-sdk/client-ecr' },
    { type: 'rust', name: 'aws-sdk-ecr' },
    { type: 'ruby', name: 'aws-sdk-ecr' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/ecr' },
    {
      type: 'terraform.resource',
      name: /^aws_ecr_/,
      example: 'aws_ecr_repository',
    },
    { type: 'githubAction', name: 'aws-actions/amazon-ecr-login' },
  ],
});
