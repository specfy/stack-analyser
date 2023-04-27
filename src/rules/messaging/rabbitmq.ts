import { register } from '../../rules';

register({
  tech: 'rabbitmq',
  dependencies: [
    { type: 'npm', name: 'amqplib' },
    { type: 'docker', name: /rabbitmq/ },
  ],
});
