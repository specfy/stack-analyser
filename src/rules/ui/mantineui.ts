import { register } from '../../register.js';

register({
  tech: 'mantineui',
  name: 'Mantine UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@mantine\//, example: '@mantine/core' }],
});
