import { register } from '../../register.js';

register({
  tech: 'sequelize',
  name: 'Sequelize',
  type: 'orm',
  files: ['.sequelizerc'],
  dependencies: [{ type: 'npm', name: /sequelize(-cli)?/, example: 'sequelize' }],
});
