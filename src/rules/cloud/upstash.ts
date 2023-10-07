import { register } from '../../register.js';

register({
  tech: 'upstash',
  name: 'Upstash',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: /^@upstash\//, example: '@upstash/ratelimit' },
  ],
});
