import { register } from '../../register.js';

register({
  tech: 'prisma',
  name: 'Prisma',
  type: 'orm',
  files: ['schema.prisma'],
  dependencies: [{ type: 'npm', name: 'prisma' }],
});
