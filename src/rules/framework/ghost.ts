import { register } from '../../register.js';

register({
  tech: 'ghost',
  name: 'Ghost',
  type: 'framework',
  dependencies: [
    { type: 'docker', name: 'ghost' },
    { type: 'npm', name: 'ghost-cli' },
    { type: 'npm', name: '@tryghost/content-api' },
  ],
});
