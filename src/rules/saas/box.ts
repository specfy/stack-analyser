import { register } from '../../register.js';

register({
  tech: 'box',
  name: 'Box',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'box-node-sdk' },
    { type: 'python', name: 'boxsdk' },
    { type: 'php', name: 'box/box-php-sdk' },
  ],
});
