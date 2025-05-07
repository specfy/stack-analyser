import { register } from '../../register.js';

register({
  tech: 'sqreen',
  name: 'Sqreen',
  type: 'security',
  dependencies: [
    { type: 'npm', name: 'sqreen' },
    { type: 'ruby', name: 'sqreen' },
  ],
});
