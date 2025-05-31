import { register } from '../../register.js';

register({
  tech: 'facebook',
  name: 'Facebook',
  type: 'communication',
  dotenv: ['FACEBOOK_'],
  dependencies: [
    { type: 'npm', name: 'facebook-nodejs-business-sdk' },
    { type: 'npm', name: 'passport-facebook' },
  ],
});
