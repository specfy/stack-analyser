import { register } from '../../rules.js';

register({
  tech: 'postgresql',
  dependencies: [
    { type: 'npm', name: 'pg' },
    { type: 'docker', name: /postgres/, example: 'postgres:0.0.0' },
  ],
});
