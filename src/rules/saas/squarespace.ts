import { register } from '../../register.js';

register({
  tech: 'squarespace',
  name: 'Squarespace',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@squarespace\//, example: '@squarespace/server' },
  ],
});
