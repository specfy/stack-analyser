import { register } from '../../register.js';

register({
  tech: 'pagerduty',
  name: 'Pagerduty',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@pagerduty/pdjs' },
    { type: 'terraform', name: 'registry.terraform.io/PagerDuty/pagerduty' },
    { type: 'rust', name: 'pagerduty-rs' },
    { type: 'ruby', name: 'pagerduty' },
    { type: 'php', name: 'adilbaig/pagerduty' },
  ],
});
