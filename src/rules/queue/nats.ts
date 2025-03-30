import { register } from '../../register.js';

register({
  tech: 'nats',
  name: 'Nats',
  type: 'messaging',
  dependencies: [
    { type: 'docker', name: 'nats' },
    { type: 'docker', name: 'nats-streaming' },
    { type: 'docker', name: 'bitnami/nats' },
    { type: 'npm', name: 'nats' },
    { type: 'php', name: 'repejota/nats' },
    { type: 'ruby', name: 'nats-pure' },
    { type: 'ruby', name: 'nats' },
    { type: 'golang', name: 'github.com/nats-io/nats.go' },
    { type: 'golang', name: 'github.com/nats-io/stan.go' },
    { type: 'rust', name: 'nats' },
  ],
});
