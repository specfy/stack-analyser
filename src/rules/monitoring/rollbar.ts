import { register } from '../../register.js';

register({
  tech: 'rollbar',
  name: 'Rollbar',
  type: 'monitoring',
  dependencies: [
    { type: 'golang', name: 'github.com/rollbar/rollbar-go' },
    { type: 'npm', name: 'rollbar' },
    { type: 'npm', name: '@rollbar/react' },
    { type: 'npm', name: 'rollbar-react-native' },
    { type: 'php', name: 'rollbar/rollbar' },
    { type: 'php', name: 'rollbar/rollbar-laravel' },
    { type: 'php', name: 'rollbar/rollbar-magento2' },
    { type: 'php', name: 'rollbar/rollbar-php-symfony-bundle' },
    { type: 'php', name: 'wpackagist-plugin/rollbar' },
    { type: 'ruby', name: 'rollbar' },
    { type: 'githubAction', name: 'rollbar/github-deploy-action' },
    { type: 'terraform', name: 'registry.terraform.io/rollbar/rollbar' },
  ],
});
