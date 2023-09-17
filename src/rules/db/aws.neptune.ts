import { register } from '../../register.js';

register({
  tech: 'aws.neptune',
  name: 'AWS Neptune',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-neptune' },
    { type: 'npm', name: '@aws-sdk/client-neptune' },
    { type: 'rust', name: 'aws-sdk-neptune' },
    { type: 'ruby', name: 'aws-sdk-neptune' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/neptune' },
    {
      type: 'terraform.resource',
      name: /^aws_neptune_/,
      example: 'aws_neptune_cluster',
    },
  ],
});
