import { register } from '../../rules.js';

register({
  tech: 'redis',
  dependencies: [
    { type: 'npm', name: 'redis' },
    { type: 'npm', name: 'ioredis' },
    { type: 'docker', name: /redis/, example: 'redis:0.0.0' },
  ],
});
