import { register } from '../../rules.js';

register({
  tech: 'prisma',
  files: ['schema.prisma'],
  dependencies: [{ type: 'npm', name: 'prisma' }],
});
