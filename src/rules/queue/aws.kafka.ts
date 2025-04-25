import { register } from '../../register.js';

register({
  tech: 'aws.kafka',
  name: 'AWS Kafka',
  type: 'queue',
  dependencies: [
    { type: 'npm', name: '@pulumi/kafka' },
    { type: 'ruby', name: 'aws-sdk-kafka' },
    { type: 'terraform.resource', name: 'aws_msk_cluster' },
    { type: 'terraform.resource', name: 'aws_msk_configuration' },
    { type: 'terraform.resource', name: 'aws_mskconnect_connector' },
  ],
});
