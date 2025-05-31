import { register } from '../../register.js';

register({
  tech: 'upstash.kafka',
  name: 'Upstash Kafka',
  type: 'queue',
  dotenv: ['UPSTASH_KAFKA_'],
  dependencies: [{ type: 'npm', name: '@upstash/kafka' }],
});
