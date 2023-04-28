import { register } from '../../rules';

register({
  tech: 'sequelize',
  files: ['.sequelizerc'],
  dependencies: [
    { type: 'npm', name: /sequelize(-cli)?/, example: 'sequelize' },
  ],
});
