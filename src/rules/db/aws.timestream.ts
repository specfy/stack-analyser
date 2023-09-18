import { register } from '../../register.js';

register({
  tech: 'aws.timestream',
  name: 'AWS Timestream',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-timestream' },
    { type: 'npm', name: '@aws-sdk/client-timestream' },
    { type: 'rust', name: 'aws-sdk-timestream' },
    { type: 'ruby', name: 'aws-sdk-timestream' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/timestream',
    },
    {
      type: 'terraform.resource',
      name: /^aws_timestream_/,
      example: 'aws_timestream_database',
    },
  ],
});
