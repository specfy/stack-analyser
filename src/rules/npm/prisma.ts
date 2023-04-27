import { register } from '../../rules';

register({
  tech: 'prisma',
  files: ['schema.prisma'],
  dependencies: [{ type: 'npm', name: 'prisma' }],
});
