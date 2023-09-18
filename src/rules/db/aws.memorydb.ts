import { register } from '../../register.js';

register({
  tech: 'aws.memorydb',
  name: 'AWS MemoryDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-memorydb' },
    { type: 'npm', name: '@aws-sdk/client-memorydb' },
    { type: 'rust', name: 'aws-sdk-memorydb' },
    { type: 'ruby', name: 'aws-sdk-memorydb' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/memorydb' },
    {
      type: 'terraform.resource',
      name: /^aws_memorydb_/,
      example: 'aws_memorydb_cluster',
    },
  ],
});
