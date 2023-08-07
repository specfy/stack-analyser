import { register } from '../../rules.js';

register({
  tech: 'slack',
  dependencies: [
    { type: 'npm', name: '@slack/web-api' },
    { type: 'terraform', name: 'registry.terraform.io/pablovarela/slack' },
    { type: 'rust', name: 'slack-morphism' },
  ],
});
