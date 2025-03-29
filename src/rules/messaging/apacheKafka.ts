import { register } from '../../register.js';

register({
  tech: 'apache_kafka',
  name: 'Apache Kafka',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'bitnami/kafka' },
    { type: 'docker', name: 'ubuntu/kafka' },
    { type: 'docker', name: 'bitnamicharts/kafka' },
    { type: 'terraform', name: 'registry.terraform.io/confluentinc/confluent' },
    { type: 'php', name: 'nmred/kafka-php' },
    { type: 'php', name: 'longlang/phpkafka' },
    { type: 'npm', name: 'kafkajs' },
    { type: 'npm', name: 'kafka-node' },
    { type: 'npm', name: 'kafkajs-snappy' },
    { type: 'npm', name: 'opentelemetry-instrumentation-kafkajs' },
    { type: 'ruby', name: 'ruby-kafka' },
    { type: 'ruby', name: 'fluent-plugin-kafka' },
    { type: 'ruby', name: 'logstash-output-kafka' },
    { type: 'ruby', name: 'logstash-input-kafka' },
  ],
});
