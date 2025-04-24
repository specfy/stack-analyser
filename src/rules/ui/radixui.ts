import { register } from '../../register.js';

register({
  tech: 'radixui',
  name: 'Radix UI',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: /^@radix-ui\//, example: '@radix-ui/react-label' },
    { type: 'npm', name: 'radix-ui' },
  ],
});
