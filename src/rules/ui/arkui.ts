import { register } from '../../register.js';

register({
  tech: 'arkui',
  name: 'Ark UI',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: '@ark-ui/react' },
    { type: 'npm', name: '@ark-ui/svelte' },
    { type: 'npm', name: '@ark-ui/solid' },
    { type: 'npm', name: '@ark-ui/vue' },
  ],
});
