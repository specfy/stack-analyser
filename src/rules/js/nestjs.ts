import { register } from '../../register.js';

register({
  tech: 'nestjs',
  name: 'NestJS',
  type: 'framework',
  files: ['nest-cli.json'],
  dependencies: [{ type: 'npm', name: '@nestjs/cli' }],
});
