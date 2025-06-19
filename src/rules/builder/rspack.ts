import { register } from '../../register.js';

register({
  tech: 'rspack',
  name: 'Rspack',
  type: 'builder',
  files: ['rspack.config.js'],
  dependencies: [
    { type: 'npm', name: 'rspack' },
    { type: 'npm', name: '@rspack/core' },
  ],
});
