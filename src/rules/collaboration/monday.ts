import { register } from '../../register.js';

register({
  tech: 'monday',
  name: 'Monday',
  type: 'collaboration',
  dependencies: [
    {
      type: 'npm',
      name: 'monday-sdk-js',
    },
  ],
});
