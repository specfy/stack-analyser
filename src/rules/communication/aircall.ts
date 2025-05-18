import { register } from '../../register.js';

register({
  tech: 'aircall',
  name: 'Aircall',
  type: 'communication',
  dependencies: [
    { type: 'npm', name: 'aircall-everywhere' },
    { type: 'npm', name: 'aircall' },
  ],
});
