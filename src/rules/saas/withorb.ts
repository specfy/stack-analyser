import { register } from '../../register.js';

register({
  tech: 'withorb',
  name: 'Orb',
  type: 'saas',
  dependencies: [
    { type: 'python', name: 'orb-billing' },
    { type: 'npm', name: 'orb-billing' },
    { type: 'golang', name: 'github.com/orbcorp/orb-go' },
  ],
});
