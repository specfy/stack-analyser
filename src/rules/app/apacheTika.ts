import { register } from '../../register.js';

register({
  tech: 'apachetika',
  name: 'Tika',
  type: 'app',
  dependencies: [
    { type: 'docker', name: 'apache/tika' },
    { type: 'python', name: 'tika' },
  ],
});
