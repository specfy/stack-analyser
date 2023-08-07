import { register } from '../../rules.js';

register({
  tech: 'rabbitmq',
  dependencies: [
    { type: 'npm', name: 'amqplib' },
    { type: 'docker', name: /rabbitmq/, example: 'rabbitmq:0.0.0' },
    { type: 'rust', name: 'rabbitmq-stream-client' },
  ],
});
