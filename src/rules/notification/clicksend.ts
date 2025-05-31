import { register } from '../../register.js';

register({
  tech: 'clicksend',
  name: 'ClickSend',
  type: 'notification',
  dotenv: ['CLICKSEND_'],
  dependencies: [{ type: 'npm', name: 'clicksend' }],
});
