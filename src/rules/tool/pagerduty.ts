import { register } from '../../rules.js';

register({
  tech: 'pagerduty',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/PagerDuty/pagerduty' },
    { type: 'rust', name: 'pagerduty-rs' },
  ],
});
