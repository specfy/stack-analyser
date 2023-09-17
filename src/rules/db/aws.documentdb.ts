import { register } from '../../register.js';

register({
  tech: 'aws.documentdb',
  name: 'AWS Document DB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-docdb' },
    { type: 'npm', name: '@aws-cdk/aws-docdb' },
    { type: 'rust', name: 'aws-sdk-docdb' },
    { type: 'ruby', name: 'aws-sdk-docdb' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/docdb' },
    {
      type: 'terraform.resource',
      name: /^aws_docdb_/,
      example: 'aws_docdb_cluster',
    },
  ],
});
