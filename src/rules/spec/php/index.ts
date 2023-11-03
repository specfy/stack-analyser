import { register } from '../../../register.js';

import { detectPhpComponent } from './component.js';

register({
  tech: 'php',
  name: 'PHP',
  type: 'language',
  files: ['composer.json', 'composer.lock'],
  extensions: ['.php', '.php3', '.php4', '.php5'],
  detect: detectPhpComponent,
  dependencies: [
    { type: 'docker', name: 'php' },
    { type: 'docker', name: 'circleci/php' },
    { type: 'docker', name: 'cimg/php' },
    { type: 'docker', name: 'bitnami/php' },
    { type: 'docker', name: 'bitnami/php-fpm' },
    { type: 'docker', name: 'okteto/php' },
    { type: 'docker', name: 'composer' },
    { type: 'docker', name: 'php-zendserver' },
    { type: 'docker', name: 'webdevops/php-apache' },
    { type: 'docker', name: 'webdevops/php-nginx' },
    { type: 'githubAction', name: 'shivammathur/setup-php' },
    { type: 'githubAction', name: 'ramsey/composer-install' },
  ],
});
