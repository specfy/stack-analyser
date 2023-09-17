import { register } from '../../register.js';

register({
  tech: 'aws.redshift',
  name: 'AWS Redshift',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-redshift' },
    { type: 'npm', name: '@aws-sdk/aws-redshift' },
    { type: 'rust', name: 'aws-sdk-redshift' },
    { type: 'ruby', name: 'aws-sdk-redshift' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/redshift' },
    {
      type: 'terraform.resource',
      name: /^aws_redshift_/,
      example: 'aws_redshift_cluster',
    },
  ],
});
