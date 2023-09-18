import { register } from '../../register.js';

register({
  tech: 'aws.glue',
  name: 'AWS Glue',
  type: 'etl',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-glue' },
    { type: 'npm', name: '@aws-cdk/aws-glue' },
    { type: 'rust', name: 'aws-sdk-glue' },
    { type: 'ruby', name: 'aws-sdk-glue' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/glue' },
    {
      type: 'terraform.resource',
      name: /^aws_glue_/,
      example: 'aws_glue_crawler',
    },
  ],
});
