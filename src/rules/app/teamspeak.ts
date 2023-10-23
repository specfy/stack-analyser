import { register } from '../../register.js';

register({
  tech: 'teamspeak',
  name: 'Teamspeak',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'teamspeak' }],
});
