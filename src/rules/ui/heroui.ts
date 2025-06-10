import { register } from '../../register.js';

register({
  tech: 'heroui',
  name: 'Hero UI',
  type: 'ui',
  dependencies: [{ type: 'npm', name: /^@heroui\//, example: '@heroui/react' }],
});
