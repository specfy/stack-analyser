import { register } from '../../register.js';

register({
  tech: 'umijs',
  name: 'UmiJS',
  type: 'ui_framework',
  files: ['.umirc.ts'],
  dependencies: [
    { type: 'npm', name: 'umi' },
    { type: 'npm', name: '@umijs/route-utils' },
  ],
});
