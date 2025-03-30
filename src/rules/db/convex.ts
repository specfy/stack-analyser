import { register } from '../../register.js';

register({
  tech: 'convexdb',
  name: 'Convex',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'convex' },
    { type: 'python', name: 'convex' },
    { type: 'rust', name: 'convex' },
  ],
});
