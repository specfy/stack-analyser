import { register } from '../../register.js';

register({
  tech: 'browerbase',
  name: 'Browserbase',
  type: 'saas',
  dependencies: [
    { type: 'php', name: '@browserbasehq/sdk' },
    { type: 'python', name: 'browserbase' },
  ],
});
