import { register } from '../../register.js';

register({
  tech: 'postman',
  name: 'Postman',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'postman-collection' },
    { type: 'npm', name: 'postman-request' },
    { type: 'npm', name: 'newman' },
  ],
});
