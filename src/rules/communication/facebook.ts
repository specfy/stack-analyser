import { register } from '../../register.js';

register({
  tech: 'facebook',
  name: 'Facebook',
  type: 'communication',
  dependencies: [{ type: 'npm', name: 'facebook-nodejs-business-sdk' }],
});
