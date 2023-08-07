import { register } from '../../rules.js';

register({
  tech: 'pagerduty',
  dependencies: [
    { type: 'npm', name: '@pagerduty/pdjs' },
    { type: 'terraform', name: 'registry.terraform.io/PagerDuty/pagerduty' },
    { type: 'rust', name: 'pagerduty-rs' },
    { type: 'ruby', name: 'pagerduty' },
  ],
});
