import { register } from '../../register.js';

register({
  tech: 'upstash',
  name: 'Upstash',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: /^@upstash\//, example: '@upstash/ratelimit' },
  ],
});
