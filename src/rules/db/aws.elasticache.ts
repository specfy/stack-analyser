import { register } from '../../register.js';

register({
  tech: 'aws.elasticache',
  name: 'AWS ElastiCache',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-elasticache' },
    { type: 'npm', name: '@aws-sdk/client-elasticache' },
    { type: 'rust', name: 'aws-sdk-elasticache' },
    { type: 'ruby', name: 'aws-sdk-elasticache' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/elasticache',
    },
    {
      type: 'terraform.resource',
      name: /^aws_elasticache/,
      example: 'aws_elasticache_cluster',
    },
    { type: 'php', name: 'atyagi/elasticache-laravel' },
  ],
});
