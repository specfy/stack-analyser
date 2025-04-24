import { register } from '../../register.js';

register({
  tech: 'clicksend',
  name: 'ClickSend',
  type: 'notification',
  dependencies: [{ type: 'npm', name: 'clicksend' }],
});
