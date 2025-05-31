import { register } from '../../register.js';

register({
  tech: 'splunk',
  name: 'Splunk',
  type: 'saas',
  dotenv: ['SPLUNK_'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/splunk/splunk' },
    { type: 'terraform', name: 'registry.terraform.io/splunk/splunkconfig' },
  ],
});
