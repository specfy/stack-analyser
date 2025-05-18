import { register } from '../../register.js';

register({
  tech: 'onlineornot',
  name: 'OnlineOrNot',
  type: 'monitoring',
  dependencies: [{ type: 'npm', name: 'onlineornot' }],
});
