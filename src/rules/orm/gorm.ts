import { register } from '../../register.js';

register({
  tech: 'gorm',
  name: 'GORM',
  type: 'orm',
  dependencies: [{ type: 'php', name: 'gorm.io/gorm' }],
});
