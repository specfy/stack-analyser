import { register } from '../../register.js';

register({
  tech: 'headlessui',
  name: 'Headless UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@headlessui\//, example: '@headlessui/react' }],
});
