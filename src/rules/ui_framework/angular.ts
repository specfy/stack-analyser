import { register } from '../../register.js';

register({
  tech: 'angular',
  name: 'Angular',
  type: 'ui_framework',
  files: ['angular.json'],
  dependencies: [
    { type: 'npm', name: 'angular' },
    { type: 'npm', name: /^@angular\//, example: '@angular/forms' },
  ],
});
