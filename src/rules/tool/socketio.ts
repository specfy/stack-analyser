import { register } from '../../register.js';

register({
  tech: 'socketio',
  name: 'Socket.io',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'socket.io' },
    { type: 'python', name: 'python-socketio' },
    { type: 'npm', name: '@opentelemetry/instrumentation-socket.io' },
  ],
});
