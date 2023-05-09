import { register } from '../../rules.js';

register({
  tech: 'socketio',
  dependencies: [{ type: 'npm', name: 'socket.io' }],
});
