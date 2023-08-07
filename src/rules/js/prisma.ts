import { register } from '../../register.js';

register({
  tech: 'prisma',
  name: 'Prisma',
  type: 'tool',
  files: ['schema.prisma'],
  dependencies: [{ type: 'npm', name: 'prisma' }],
});
