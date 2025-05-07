import { register } from '../../register.js';

register({
  tech: 'typeorm',
  name: 'TypeORM',
  type: 'orm',
  dependencies: [{ type: 'npm', name: 'typeorm' }],
});
