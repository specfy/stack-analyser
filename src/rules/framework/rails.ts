import { register } from '../../register.js';

register({
  tech: 'rails',
  name: 'Rails',
  type: 'framework',
  dependencies: [
    { type: 'npm', name: /@rails\//, example: '@rails/actioncable' },
    { type: 'npm', name: 'rails' },
  ],
});
