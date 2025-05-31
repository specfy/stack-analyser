import { register } from '../../register.js';

register({
  tech: 'stenciljs',
  name: 'Stencil',
  type: 'ui_framework',
  dependencies: [{ type: 'npm', name: '@stencil/core' }],
});
