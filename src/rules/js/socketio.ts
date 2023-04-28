import { register } from '../../rules';

register({
  tech: 'socketio',
  dependencies: [{ type: 'npm', name: 'socket.io' }],
});
