import { register } from '../../rules.js';

register({
  tech: 'newrelic',
  dependencies: [
    { type: 'npm', name: 'newrelic' },
    { type: 'terraform', name: 'registry.terraform.io/newrelic/newrelic' },
  ],
});
