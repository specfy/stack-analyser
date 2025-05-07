import { register } from '../../register.js';

register({
  tech: 'gorm',
  name: 'GORM',
  type: 'orm',
  dependencies: [{ type: 'golang', name: 'gorm.io/gorm' }],
});
