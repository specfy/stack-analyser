import { register } from '../../rules.js';

register({
  tech: 'sequelize',
  files: ['.sequelizerc'],
  dependencies: [
    { type: 'npm', name: /sequelize(-cli)?/, example: 'sequelize' },
  ],
});
