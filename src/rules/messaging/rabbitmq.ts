import { register } from '../../register.js';

register({
  tech: 'rabbitmq',
  name: 'RabbitMQ',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: 'amqplib' },
    { type: 'npm', name: '@opentelemetry/instrumentation-amqplib' },
    { type: 'docker', name: /rabbitmq/, example: 'rabbitmq:0.0.0' },
    { type: 'rust', name: 'rabbitmq-stream-client' },
    { type: 'ruby', name: 'bunny' },
    { type: 'php', name: 'php-amqplib/php-amqplib' },
  ],
});
