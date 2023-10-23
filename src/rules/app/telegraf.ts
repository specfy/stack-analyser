import { register } from '../../register.js';

register({
  tech: 'telegraf',
  name: 'Telegraf',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'telegraf' }],
});
