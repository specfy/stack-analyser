import { register } from '../../register.js';

register({
  tech: 'paddle',
  name: 'Paddle',
  type: 'payment',
  dependencies: [
    { type: 'npm', name: '@paddle/paddle-js' },
    { type: 'npm', name: '@paddle/paddle-node-sdk' },
    { type: 'golang', name: 'github.com/PaddleHQ/paddle-go-sdk' },
    { type: 'python', name: 'paddle-python-sdk' },
    { type: 'php', name: 'paddlehq/paddle-php-sdk' },
  ],
});
