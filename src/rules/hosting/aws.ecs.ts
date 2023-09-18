import { register } from '../../register.js';

register({
  tech: 'aws.ecs',
  name: 'AWS Container',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-ecs' },
    { type: 'npm', name: '@aws-sdk/client-ecs' },
    { type: 'rust', name: 'aws-sdk-ecs' },
    { type: 'ruby', name: 'aws-sdk-ecs' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/ecs' },
    {
      type: 'terraform.resource',
      name: /^aws_ecs/,
      example: 'aws_ecs_cluster',
    },
  ],
});
