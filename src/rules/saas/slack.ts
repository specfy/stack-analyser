import { register } from '../../register.js';

register({
  tech: 'slack',
  name: 'Slack',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@slack/web-api' },
    { type: 'terraform', name: 'registry.terraform.io/pablovarela/slack' },
    { type: 'rust', name: 'slack-morphism' },
    { type: 'ruby', name: 'slack-ruby-client' },
    { type: 'php', name: 'laravel/slack-notification-channel' },
    { type: 'githubAction', name: 'slackapi/slack-github-action' },
    { type: 'githubAction', name: '8398a7/action-slack' },
    { type: 'php', name: 'jolicode/slack-php-api' },
    { type: 'php', name: 'maknz/slack' },
    { type: 'php', name: 'alek13/slack' },
    { type: 'golang', name: 'github.com/slack-go/slack' },
    { type: 'docker', name: 'kasmweb/slack' },
  ],
});
