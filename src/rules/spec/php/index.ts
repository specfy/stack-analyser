import { register } from '../../../register.js';

import { detectPhpComponent } from './component.js';

register({
  tech: 'php',
  name: 'PHP',
  type: 'language',
  files: ['composer.json', 'composer.lock'],
  extensions: ['.php', '.php3', '.php4', '.php5'],
  dependencies: [{ type: 'docker', name: 'php', example: 'php:0.0.0' }],
  detect: detectPhpComponent,
});
