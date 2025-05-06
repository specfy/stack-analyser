import { register } from '../../register.js';

register({
  tech: 'useparagon',
  name: 'Paragon',
  type: 'etl',
  dependencies: [{ type: 'npm', name: /^@useparagon\//, example: '@useparagon/connect' }],
});
