import { register } from '../../register.js';

register({
  tech: 'inngest',
  name: 'Inngest',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'inngest' },
    { type: 'golang', name: 'github.com/inngest/inngestgo' },
    { type: 'python', name: 'inngest' },
  ],
});
