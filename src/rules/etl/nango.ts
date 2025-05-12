import { register } from '../../register.js';

register({
  tech: 'nango',
  name: 'Nango',
  type: 'etl',
  files: ['.nango', 'nango.yaml'],
  dependencies: [
    { type: 'npm', name: 'nango' },
    { type: 'npm', name: '@nangohq/node' },
    { type: 'npm', name: '@nangohq/frontend' },
    { type: 'docker', name: 'nangohq/nango' },
    { type: 'docker', name: 'nangohq/nango-server' },
  ],
});
