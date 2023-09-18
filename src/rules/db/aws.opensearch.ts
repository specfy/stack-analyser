import { register } from '../../register.js';

register({
  tech: 'aws.opensearch',
  name: 'AWS Opensearch',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-opensearch' },
    { type: 'npm', name: '@aws-sdk/client-opensearch' },
    { type: 'rust', name: 'aws-sdk-opensearch' },
    { type: 'ruby', name: 'aws-sdk-opensearch' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/opensearch',
    },
    {
      type: 'terraform.resource',
      name: /^aws_opensearch/,
      example: 'aws_opensearch_domain',
    },
  ],
});
