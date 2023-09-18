import { register } from '../../register.js';

register({
  tech: 'aws.cloudsearch',
  name: 'AWS Cloudsearch',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-cloudsearch' },
    { type: 'npm', name: '@aws-sdk/client-cloudsearch' },
    { type: 'rust', name: 'aws-sdk-cloudsearch' },
    { type: 'ruby', name: 'aws-sdk-cloudsearch' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/cloudsearch',
    },
    {
      type: 'terraform.resource',
      name: /^aws_cloudsearch/,
      example: 'aws_cloudsearch_domain',
    },
  ],
});
