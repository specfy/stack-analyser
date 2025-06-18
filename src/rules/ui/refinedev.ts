import { register } from '../../register.js';

register({
  tech: 'refinedev',
  name: 'Refine',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: '@refinedev/core' },
    { type: 'npm', name: '@refinedev/antd' },
    { type: 'npm', name: '@refinedev/cli' },
  ],
});
