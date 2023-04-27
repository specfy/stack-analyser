import { register } from '../../rules';

register({
  tech: 'angular',
  files: ['angular.json'],
  dependencies: [{ type: 'npm', name: 'angular' }],
});
