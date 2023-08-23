import { register } from '../../register.js';

register({
  tech: 'placekit',
  name: 'PlaceKit',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@placekit\//, example: '@placekit/client-js' },
  ],
});
