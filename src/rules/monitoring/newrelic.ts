import { register } from '../../register.js';

register({
  tech: 'newrelic',
  name: 'New Relic',
  type: 'monitoring',
  dotenv: ['NEW_RELIC_'],
  dependencies: [
    { type: 'npm', name: 'newrelic' },
    { type: 'terraform', name: 'registry.terraform.io/newrelic/newrelic' },
    { type: 'ruby', name: 'newrelic_rpm' },
    { type: 'php', name: 'ekino/newrelic-bundle' },
    { type: 'php', name: 'intouch/newrelic' },
    { type: 'npm', name: '@pulumi/newrelic' },
  ],
});
