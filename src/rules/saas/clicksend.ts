import { register } from '../../register.js';

register({
  tech: 'clicksend',
  name: 'ClickSend',
  type: 'saas',
  dependencies: [{ type: 'npm', name: 'clicksend' }],
});
