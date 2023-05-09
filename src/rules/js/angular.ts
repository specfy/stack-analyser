import { register } from '../../rules.js';

register({
  tech: 'angular',
  files: ['angular.json'],
  dependencies: [{ type: 'npm', name: 'angular' }],
});
