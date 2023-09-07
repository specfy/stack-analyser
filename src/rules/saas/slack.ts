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
  ],
});
