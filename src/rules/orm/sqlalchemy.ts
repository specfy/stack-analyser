import { register } from '../../register.js';

register({
  tech: 'sqlalchemy',
  name: 'SQLAlchemy',
  type: 'orm',
  dependencies: [{ type: 'python', name: 'SQLAlchemy' }],
});
