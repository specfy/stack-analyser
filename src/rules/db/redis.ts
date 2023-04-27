import { register } from '../../rules';

register({
  tech: 'redis',
  dependencies: [
    { type: 'npm', name: 'redis' },
    { type: 'docker', name: /redis/ },
  ],
});
