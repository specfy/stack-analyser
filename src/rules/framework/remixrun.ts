import { register } from '../../register.js';

register({
  tech: 'remixrun',
  name: 'Remix',
  type: 'framework',
  dependencies: [
    { type: 'npm', name: '@remix-run/node' },
    { type: 'npm', name: '@remix-run/react' },
    { type: 'npm', name: '@remix-run/serve' },
  ],
});
