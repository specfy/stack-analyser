import { register } from '../../rules.js';

register({
  tech: 'redis',
  dependencies: [
    { type: 'npm', name: 'redis' },
    { type: 'docker', name: /redis/, example: 'redis:0.0.0' },
  ],
});
