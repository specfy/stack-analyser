import { register } from '../../rules.js';

register({
  tech: 'mongodb',
  dependencies: [
    { type: 'npm', name: 'mongoose' },
    { type: 'docker', name: /mongo/, example: 'mongo:0.0.0' },
  ],
});
