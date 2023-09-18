import { register } from '../../register.js';

register({
  tech: 'aws.kinesis',
  name: 'AWS Kinesis',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-kinesis' },
    { type: 'npm', name: '@aws-sdk/client-firehose' },
    { type: 'npm', name: '@aws-cdk/aws-kinesis' },
    { type: 'npm', name: '@aws-cdk/aws-firehose' },
    { type: 'rust', name: 'aws-sdk-kinesis' },
    { type: 'rust', name: 'aws-sdk-firehose' },
    { type: 'ruby', name: 'aws-sdk-kinesis' },
    { type: 'ruby', name: 'aws-sdk-firehose' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/kinesis' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/firehose' },
    {
      type: 'terraform.resource',
      name: /^aws_kinesis_/,
      example: 'aws_kinesis_stream',
    },
  ],
});
