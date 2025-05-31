import { register } from '../../register.js';

register({
  tech: 'ghost',
  name: 'Ghost',
  type: 'cms',
  dotenv: ['GHOST_'],
  dependencies: [
    { type: 'docker', name: 'ghost' },
    { type: 'npm', name: 'ghost-cli' },
    { type: 'npm', name: '@tryghost/content-api' },
  ],
});
