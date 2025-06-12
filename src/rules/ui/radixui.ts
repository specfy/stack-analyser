import { register } from '../../register.js';

register({
  tech: 'radixui',
  name: 'Radix UI',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: '@radix-ui/react-context' },
    { type: 'npm', name: '@radix-ui/react-slot' },
    { type: 'npm', name: '@radix-ui/react-label' },
    { type: 'npm', name: 'radix-ui' },
  ],
});
