import { register } from '../../register.js';

register({
  tech: 'remixrouter',
  name: 'Remix Router',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: '@remix-run/router' },
    { type: 'npm', name: '@remix-run/react' },
  ],
});
