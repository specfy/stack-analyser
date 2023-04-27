import { register } from '../../rules';

register({
  tech: 'postgresql',
  dependencies: [
    { type: 'npm', name: 'pg' },
    { type: 'docker', name: /postgres/ },
  ],
});
