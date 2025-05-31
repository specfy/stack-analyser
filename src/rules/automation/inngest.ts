import { register } from '../../register.js';

register({
  tech: 'inngest',
  name: 'Inngest',
  type: 'automation',
  dotenv: ['INNGEST_'],
  dependencies: [
    { type: 'npm', name: 'inngest' },
    { type: 'golang', name: 'github.com/inngest/inngestgo' },
    { type: 'python', name: 'inngest' },
  ],
});
