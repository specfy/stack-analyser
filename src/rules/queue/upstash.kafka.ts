import { register } from '../../register.js';

register({
  tech: 'upstash.kafka',
  name: 'Upstash Kafka',
  type: 'queue',
  dependencies: [{ type: 'npm', name: '@upstash/kafka' }],
});
