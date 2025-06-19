import { register } from '../../register.js';

register({
  tech: 'parceljs',
  name: 'Parcel',
  type: 'builder',
  dependencies: [
    { type: 'npm', name: 'parcel' },
    { type: 'npm', name: '@parcel/core' },
  ],
});
