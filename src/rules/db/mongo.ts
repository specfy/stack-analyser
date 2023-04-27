import { register } from '../../rules';

register({
  tech: 'mongodb',
  dependencies: [
    { type: 'npm', name: 'mongoose' },
    { type: 'docker', name: /mongo/ },
  ],
});
